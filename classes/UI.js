class UI {
    // Helper function to add DOM element
    addUIElement(elementName, classname = '', textContent = '', attributes = {}) {
        const element = document.createElement(elementName);
        if(classname !== '') {
            element.className = classname;
        }
        element.appendChild(document.createTextNode(textContent));
        if(Object.keys(attributes).length > 0) {
            for(let key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }
        return element;
    }

    addBook(book) {
        // create table row
        const tr = this.addUIElement('tr');

        for (let name in book) {
            // create <td> element
            let td = this.addUIElement('td', '', book[name]);
            // add td to tr
            tr.appendChild(td); // add td to tr
        }

        // X link
        // create <td> element
        let td = this.addUIElement('td');
        // create <a> element
        const link = this.addUIElement('a', '', 'X', {'href':'#'});
        td.appendChild(link);
        // add td to tr
        tr.appendChild(td);
        // add tr to tbody
        const booksList = document.querySelector('#books-list');
        booksList.appendChild(tr);
    }
}