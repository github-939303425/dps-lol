window.onload = function () {
    let targetImage = document.querySelector("#smart-image");
    //用户触发此事件时
    targetImage.addEventListener("click", function () {
        //在浏览器中间弹出窗口,并显示如下文字
        // alert("点击了图片");
        //用户点击事件的时候进行了图片的缩放
        if (targetImage.classList.contains("small")) {
            targetImage.classList.remove("small");
        } else {
            targetImage.classList.add("small");
        }
    });
}
