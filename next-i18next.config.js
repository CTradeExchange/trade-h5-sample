module.exports = {
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['en-US', 'zh-CN', 'zh-HK'],
        // 不根据用户的首选语言环境自动重定向
        localeDetection: false,
        reloadOnPrerender: process.env.NODE_ENV === 'development',
        // 自定义命名空间前缀
        // nsSeparator: '.',
    },
    
}
