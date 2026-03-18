// 3D照片球效果
class PhotoSphere {
    constructor(containerId, photos) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.photos = photos;
        this.radius = 200; // 球体半径
        this.angleX = 0;
        this.angleY = 0;
        this.speedX = 0; // X轴旋转速度
        this.speedY = 0.01; // Y轴旋转速度（自动旋转）
        this.autoRotateSpeed = 0.01; // 基础自动旋转速度
        
        this.init();
    }
    
    init() {
        // 创建照片元素
        this.photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.className = 'sphere-photo';
            img.alt = `照片 ${index + 1}`;
            
            // 在球面上均匀分布照片
            const phi = Math.acos(-1 + (2 * index + 1) / this.photos.length);
            const theta = Math.sqrt(this.photos.length * Math.PI) * phi;
            
            img.dataset.phi = phi;
            img.dataset.theta = theta;
            
            this.container.appendChild(img);
        });
        
        // 鼠标交互 - 控制旋转速度而不是目标角度
        let lastMouseX = 0;
        let lastMouseY = 0;
        let isMouseOver = false;
        
        this.container.addEventListener('mouseenter', (e) => {
            isMouseOver = true;
            const rect = this.container.getBoundingClientRect();
            lastMouseX = e.clientX - rect.left;
            lastMouseY = e.clientY - rect.top;
        });
        
        this.container.addEventListener('mouseleave', () => {
            isMouseOver = false;
            // 恢复自动旋转
            this.speedY = this.autoRotateSpeed;
            this.speedX = 0;
        });
        
        this.container.addEventListener('mousemove', (e) => {
            if (!isMouseOver) return;
            
            const rect = this.container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // 计算鼠标移动的增量
            const deltaX = mouseX - lastMouseX;
            const deltaY = mouseY - lastMouseY;
            
            // 根据鼠标移动增量调整旋转速度
            this.speedY = deltaX * 0.002; // 水平移动控制Y轴旋转
            this.speedX = deltaY * 0.002; // 垂直移动控制X轴旋转
            
            lastMouseX = mouseX;
            lastMouseY = mouseY;
        });
        
        // 启动动画
        this.animate();
    }
    
    updatePositions() {
        // 持续累积旋转角度 - 这样球体可以完整旋转
        this.angleX += this.speedX;
        this.angleY += this.speedY;
        
        // 速度衰减（当没有鼠标交互时）
        this.speedX *= 0.95;
        this.speedY *= 0.98;
        
        // 确保至少保持最小的自动旋转速度
        if (Math.abs(this.speedY) < this.autoRotateSpeed) {
            this.speedY = this.autoRotateSpeed;
        }
        
        const photos = this.container.querySelectorAll('.sphere-photo');
        photos.forEach((photo) => {
            const phi = parseFloat(photo.dataset.phi);
            const theta = parseFloat(photo.dataset.theta);
            
            // 3D球面坐标转换
            const x = this.radius * Math.sin(phi) * Math.cos(theta + this.angleY);
            const y = this.radius * Math.cos(phi + this.angleX);
            const z = this.radius * Math.sin(phi) * Math.sin(theta + this.angleY);
            
            // 计算缩放（模拟透视）
            const scale = (this.radius * 1.5 + z) / (2.5 * this.radius);
            const opacity = Math.max(0.2, Math.min(1, (scale - 0.3) * 2.5));
            
            // 应用变换
            photo.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
            photo.style.opacity = opacity;
            photo.style.zIndex = Math.floor(z + 1000);
        });
    }
    
    animate() {
        this.updatePositions();
        requestAnimationFrame(() => this.animate());
    }
}

// 初始化照片球
document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        'images/work1.jpg',
        'images/work2.jpg',
        'images/work3.jpg',
        'images/work4.jpg',
        'images/work5.jpg',
        'images/work6.jpg',
        'images/work7.jpg'
    ];
    
    new PhotoSphere('photo-sphere-container', photos);
});
