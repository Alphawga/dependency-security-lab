console.log("Post install script executed");

console.log(
    "Can this script access the credentials in my environment?", Boolean(process.env.DEMO_DEPLOY_TOKEN)
)