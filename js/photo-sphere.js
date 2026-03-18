// 3D照片球效果
class PhotoSphere {
    constructor(containerId, photos) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.photos = photos;
        this.radius = 200; // 球体半径
        this.angleX = 0;
        this.angleY = 0;
        this.targetAngleX = 0;
        this.targetAngleY = 0;
        this.speed = 0.001;
        
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
            const phi = Math.acos(-1 + (2 * index) / this.photos.length);
            const theta = Math.sqrt(this.photos.length * Math.PI) * phi;
            
            img.dataset.phi = phi;
            img.dataset.theta = theta;
            
            this.container.appendChild(img);
        });
        
        // 鼠标交互
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
            
            this.targetAngleX = y * 0.5;
            this.targetAngleY = x * 0.5;
        });
        
        // 启动动画
        this.animate();
    }
    
    updatePositions() {
        // 平滑过渡到目标角度
        this.angleX += (this.targetAngleX - this.angleX) * 0.05;
        this.angleY += (this.targetAngleY - this.angleY) * 0.05;
        
        // 自动旋转
        this.angleY += this.speed;
        
        const photos = this.container.querySelectorAll('.sphere-photo');
        photos.forEach((photo) => {
            const phi = parseFloat(photo.dataset.phi);
            const theta = parseFloat(photo.dataset.theta);
            
            // 3D球面坐标转换
            const x = this.radius * Math.sin(phi) * Math.cos(theta + this.angleY);
            const y = this.radius * Math.cos(phi + this.angleX);
            const z = this.radius * Math.sin(phi) * Math.sin(theta + this.angleY);
            
            // 计算缩放（模拟透视）
            const scale = (this.radius + z) / (2 * this.radius);
            const opacity = (scale - 0.5) * 2;
            
            // 应用变换
            photo.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
            photo.style.opacity = Math.max(0.3, Math.min(1, opacity));
            photo.style.zIndex = Math.floor(z);
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
