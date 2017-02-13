document.onreadystatechange = function () {
    var state = document.readyState;

    if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('loader').classList.add('hidden');
            // Make the images appear again
            var windows = document.getElementsByClassName('parallax-mirror');
            for(var i = 0; i < windows.length; i++) {
                windows[i].style.display  = 'inherit';
            }

            document.getElementById('contents').classList.add('visible');
        }, 1000);
    }
};