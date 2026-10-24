document.addEventListener("DOMContentLoaded", () => {
    
    // 1. فحص تحميل ملف البيانات بأمان
    if (typeof dynamicProfileConfig === 'undefined') {
        console.error("خطأ: ملف data.js لم يتم تحميله!");
        document.getElementById("profile-name").textContent = "خطأ في تحميل ملف البيانات";
        return;
    }

    // 2. تطبيق اللون المختار من ملف المتغيرات ديناميكياً
    if (dynamicProfileConfig.metadata && dynamicProfileConfig.metadata.themeColor) {
        document.documentElement.style.setProperty('--main-blue', dynamicProfileConfig.metadata.themeColor);
    }

    // 3. حقن البيانات الأساسية في الهيكل
    document.getElementById("profile-name").textContent = dynamicProfileConfig.identity.name;
    document.getElementById("profile-title").textContent = dynamicProfileConfig.identity.subtitle;
    document.getElementById("profile-about").textContent = dynamicProfileConfig.identity.bio;
    document.getElementById("profile-img").src = dynamicProfileConfig.identity.logoOrAvatar;

    // 4. ربط وقراءة أزرار الاتصال السريع وإخفاء غير الممتلئ
    const contact = dynamicProfileConfig.quickContact;
    
    if (contact.phone) document.getElementById("btn-phone").href = `tel:${contact.phone}`;
    else document.getElementById("btn-phone").style.display = "none";

    if (contact.whatsapp) document.getElementById("btn-whatsapp").href = `https://wa.me{contact.whatsapp}`;
    else document.getElementById("btn-whatsapp").style.display = "none";

    if (contact.email) document.getElementById("btn-email").href = `mailto:${contact.email}`;
    else document.getElementById("btn-email").style.display = "none";

    if (contact.website) document.getElementById("btn-website").href = contact.website;
    else document.getElementById("btn-website").style.display = "none";

    // 5. توليد أيقونات السوشيال ميديا التفاعلية
    const socialContainer = document.getElementById("social-container");
    const iconsMap = {
        facebook: "fa-brands fa-facebook-f",
        instagram: "fa-brands fa-instagram",
        linkedin: "fa-brands fa-linkedin-in",
        twitter: "fa-brands fa-x-twitter",
        tiktok: "fa-brands fa-tiktok",
        youtube: "fa-brands fa-youtube"
    };

    socialContainer.innerHTML = ""; // تصفية الصندوق أولاً
    for (const [platform, url] of Object.entries(dynamicProfileConfig.socialLinks)) {
        if (url) {
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.className = "social-circle";
            anchor.target = "_blank";
            anchor.innerHTML = `<i class="${iconsMap[platform]}"></i>`;
            socialContainer.appendChild(anchor);
        }
    }

    // 6. حقن وبناء كروت المنتجات
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";
    if (dynamicProfileConfig.products && dynamicProfileConfig.products.length > 0) {
        dynamicProfileConfig.products.forEach(product => {
            productsContainer.innerHTML += `
                <div class="item-card">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="card-content">
                        <h3>${product.title}</h3>
                        <p><strong>التصنيف:</strong> ${product.category}</p>
                        <p>${product.description}</p>
                        <p style="color: var(--main-blue); font-weight: bold; margin-top: 4px;">${product.price}</p>
                    </div>
                </div>
            `;
        });
    } else {
        productsContainer.innerHTML = "<p style='text-align:center; padding:10px; color:#9ca3af;'>لا توجد منتجات</p>";
    }

    // 7. حقن وبناء كروت المقالات
    const articlesContainer = document.getElementById("articles-container");
    articlesContainer.innerHTML = "";
    if (dynamicProfileConfig.articles && dynamicProfileConfig.articles.length > 0) {
        dynamicProfileConfig.articles.forEach(article => {
            articlesContainer.innerHTML += `
                <div class="item-card">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="card-content">
                        <h3>${article.title}</h3>
                        <p style="font-size:0.75rem; color:#9ca3af; margin-bottom:4px;">تاريخ النشر: ${article.date}</p>
                        <p>${article.summary}</p>
                    </div>
                </div>
            `;
        });
    } else {
        articlesContainer.innerHTML = "<p style='text-align:center; padding:10px; color:#9ca3af;'>لا توجد مقالات</p>";
    }

    // 8. توليد صورة الـ QR Code مباشرة لحل أزمة حظر المتصفحات للـ Canvas
    const qrImageElement = document.getElementById('qr-image');
    const currentUrl = encodeURIComponent(window.location.href);
    qrImageElement.src = `https://googleapis.com{currentUrl}&choe=UTF-8`;
    qrImageElement.style.display = "block";
});

// دالة التنقل الفوري اللحظي بين التبويبات والمجلدات
function switchTab(tabId) {
    document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}
