const CopyPlugin = {
    install: function (Vue, options) {

        options.router.afterEach((to, from) => {
            setTimeout(() => {
                document.querySelectorAll("pre.shiki").forEach(node => {
                    let icon = document.createElement("span");
                    icon.innerText = "Copy";
                    icon.classList.add("copy");
                    node.appendChild(icon);

                    icon.addEventListener("click", async () => {

                        // copy to clipboard
                        if (navigator.clipboard) {
                            await navigator.clipboard.writeText(node.querySelector("code").innerText);
                        }
                        icon.innerText = "Copied";
                        setTimeout(() => {
                            icon.innerText = "Copy";
                        }, 5000);
                    })
                })
            }, 1000);
        })
    }
}

export default CopyPlugin;