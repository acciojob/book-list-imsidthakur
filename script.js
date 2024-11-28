 document.getElementById('submit').addEventListener('click', function () {
            // Get input values
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;

            // Validate input
            if (title === '' || author === '' || isbn === '') {
                alert('Please fill in all fields');
                return;
            }

            // Create a new row
            const table = document.getElementById('book-list');
            const row = document.createElement('tr');

            // Insert cells
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="btn btn-danger btn-sm delete">X</button></td>
            `;

            table.appendChild(row);

            // Clear input fields
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        });

        // Event delegation for delete buttons
        document.getElementById('book-list').addEventListener('click', function (e) {
            if (e.target.classList.contains('delete')) {
                if (confirm('Are you sure you want to delete this book?')) {
                    const row = e.target.parentElement.parentElement;
                    row.remove();
                }
            }
        });