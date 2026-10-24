// ملف البيانات الحقيقي الممتلئ لتشغيل القالب الذكي
const dynamicProfileConfig = {
    
    // 1. إعدادات الألوان والنظام
    metadata: {
        accountType: "organization", 
        themeColor: "#2563eb",       // لون الأزرار الأساسي (أزرق)
        lang: "ar",                  
        direction: "rtl"             
    },

    // 2. بيانات الهوية الأساسية (ستظهر في أعلى الصفحة بدلاً من "جاري التحميل")
    identity: {
        name: "النجم الساطع لخدمات التصوير", 
        subtitle: "تصوير فوتوغرافي وإنتاج مرئي محترف", 
        bio: "نحن هنا لتوثيق أجمل لحظاتكم بأحدث كاميرات التصوير السينمائي والفوتوغرافي، خبرة أكثر من 5 سنوات في تغطية المؤتمرات والمناسبات.", 
        logoOrAvatar: "https://picsum.photos" // رابط صورة لوجو عشوائي مؤقت للاختبار
    },
    
    // 3. قنوات السوشيال ميديا والاتصال (تأكد من كتابة روابط حقيقية)
    quickContact: {
        phone: "+201012345678", 
        whatsapp: "201012345678", 
        email: "star@example.com", 
        website: "https://google.com", 
        locationMap: "https://google.com" 
    },
    
    // 4. روابط شبكات التواصل الاجتماعي
    socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        tiktok: "https://tiktok.com",
        youtube: "https://youtube.com"
    },

    // 5. قائمة الخدمات والمنتجات الممتلئة
    products: [
        {
            id: "prod-1",
            title: "جلسة تصوير خارجية (Outdoor)",
            category: "الأفراد",
            description: "جلسة تصوير احترافية في حديقة أو لوكيشن خارجي تشمل تعديل 20 صورة.",
            price: "100$",
            image: "https://picsum.photos"
        },
        {
            id: "prod-2",
            title: "تغطية المؤتمرات والندوات",
            category: "الشركات",
            description: "تغطية كاملة للفيديو والفوتوغرافي للمؤسسات والشركات بأعلى جودة.",
            price: "300$ يومياً",
            image: "https://picsum.photos"
        }
    ],

    // 6. قائمة معلومات أو مقالات تفيدك
    articles: [
        {
            id: "art-1",
            title: "كيف تستعد لجلسة تصويرك الاحترافية الأولى؟",
            date: "2026-10-24",
            summary: "نصائح وإرشادات حول اختيار الألوان والملابس المناسبة لتبدو رائعاً أمام الكاميرا البرمجية.",
            image: "https://picsum.photos"
        }
    ]
};
