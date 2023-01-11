(() => {

    const items = ['input_width', 'input_height',
        'input_radius', 'input_color',
        'input_count', 'input_indent']


    const playgroundStorage = localStorage.getItem('playground');
    const database = (playgroundStorage) ? JSON.parse(playgroundStorage) : [];

    document.getElementById('btn_show').addEventListener('click', () => {
        const object = items.reduce((accum, value) => {
            accum[value] = document.getElementById(value).value;
            return accum;
        }, {})
        database.push(object);
        localStorage.setItem('playground', JSON.stringify(database));
        
        // How I can take values from 'object' other way?
        const playground = document.getElementById('playground');
         for(let i = 0; i <= object.input_count-1; i++){
            const displayDiv = document.createElement('div');
            displayDiv.style.width = object.input_width + "vw";
            displayDiv.style.height = object.input_height + "vh";
            displayDiv.style.borderRadius = object.input_radius + "px";
            displayDiv.style.backgroundColor = object.input_color;
            displayDiv.style.marginTop = object.input_indent+"px";

            playground.appendChild(displayDiv);
         }
    })

})();