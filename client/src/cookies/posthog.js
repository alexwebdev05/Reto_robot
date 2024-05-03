import posthog from 'posthog-js'

export default {
    install(app) {
        app.config.globalProperties.$posthog.int(
            "",
            {
                api_host: "https://app.posthog.com"
            }
        )
    }
}