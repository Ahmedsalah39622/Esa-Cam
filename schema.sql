-- =================================================================
-- ESA CAM E-COMMERCE — COMPLETE DATABASE SCHEMA
-- Hostinger phpMyAdmin • Database: u407531143_esa
-- =================================================================
-- HOW TO USE:
-- 1. Go to Hostinger hPanel → Databases → phpMyAdmin
-- 2. Select your database from the left panel
-- 3. Click the "SQL" tab at the top
-- 4. Paste this ENTIRE script and click "Go"
-- =================================================================

-- 1. جدول مديري النظام والأدمنز (Admin Users)
CREATE TABLE IF NOT EXISTS admins (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'store_manager',
    is_active BOOLEAN DEFAULT TRUE,
    phone VARCHAR(50) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- إضافة حساب الأدمن الرئيسي (Admin Master)
INSERT INTO admins (id, name, email, password_hash, role, is_active)
VALUES ('admin_master', 'Ahmed Mahmoud', 'admin@esacam.com', 'admin123', 'super_admin', TRUE)
ON DUPLICATE KEY UPDATE name=name;

-- 2. جدول الطلبات والأوردرات (Orders)
CREATE TABLE IF NOT EXISTS orders (
    id VARCHAR(100) PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    customer_email VARCHAR(255) NULL,
    city VARCHAR(100) NOT NULL,
    shipping_address TEXT NOT NULL,
    notes TEXT NULL,
    payment_method VARCHAR(50) DEFAULT 'cod',
    total_amount DECIMAL(10, 2) NOT NULL,
    items_json JSON NOT NULL,
    status ENUM('new', 'confirmed', 'shipped', 'delivered', 'cancelled') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. جدول المنتجات والمعدات (Products)
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    original_price DECIMAL(10, 2) NULL,
    category VARCHAR(100) NOT NULL,
    image_url TEXT NOT NULL,
    badge VARCHAR(50) NULL,
    stock_status ENUM('in-stock', 'low-stock', 'pre-order', 'out-of-stock') DEFAULT 'in-stock',
    rating DECIMAL(2, 1) DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    short_description TEXT NULL,
    specs_json JSON NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. جدول البراندات في شريط الـ Marquee (Brands)
CREATE TABLE IF NOT EXISTS brands (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    logo_text VARCHAR(100) NULL,
    logo_image TEXT NULL,
    sub_title VARCHAR(150) NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. جدول محتوى وصور أقسام الصفحة الرئيسية (Homepage Sections CMS)
CREATE TABLE IF NOT EXISTS homepage_sections (
    section_key VARCHAR(100) PRIMARY KEY,
    section_name VARCHAR(255) NOT NULL,
    content_json JSON NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. جدول المستخدمين والعملاء وصناع الأفلام (Users / Clients)
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NULL,
    city VARCHAR(100) NULL,
    role ENUM('client', 'admin', 'super_admin', 'store_manager') DEFAULT 'client',
    total_orders INT DEFAULT 0,
    total_spent DECIMAL(12, 2) DEFAULT 0.00,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. جدول إعدادات المتجر والشحن العام (Store & Shipping Settings)
CREATE TABLE IF NOT EXISTS store_settings (
    setting_key VARCHAR(100) PRIMARY KEY,
    setting_value JSON NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



