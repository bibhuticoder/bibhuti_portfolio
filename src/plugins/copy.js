const CopyPlugin = {
    install: function (Vue) {
        Vue.mixin({
            mounted: function () {
                document.querySelectorAll("pre.shiki:not(.--copy)").forEach(node => {
                    let icon = document.createElement("span");
                    icon.innerText = "Copy";
                    icon.classList.add("copy");
                    node.appendChild(icon);
                    node.classList.add("--copy");

                    icon.addEventListener("click", async () => {

                        // copy to clipboard
                        if (navigator.clipboard) {
                            await navigator.clipboard.writeText(node.querySelector("code").innerText);
                        }
                        icon.innerText = "Copied";
                        setTimeout(() => icon.innerText = "Copy", 2000);
                    })
                })
            }
        })
    }
}

export default CopyPlugin;