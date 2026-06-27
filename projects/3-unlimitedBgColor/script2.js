 const generateRandomColor = function () {
            const hexChars = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                const randomIndex = Math.floor(Math.random() * 16);
                color += hexChars[randomIndex];
            }
            return color;
        };

        let interval;

        function startChangingColor() {
           
            if (!interval) {
                function changecolor(){
                    document.body.style.backgroundColor = generateRandomColor();
                }
                interval = setInterval(changecolor, 1000);
            }
        }

        function stopChangingColor() {
            clearInterval(interval);
            interval = null; 
        }

        document.querySelector('#start').addEventListener('click', startChangingColor);
        document.querySelector('#stop').addEventListener('click', stopChangingColor);
    