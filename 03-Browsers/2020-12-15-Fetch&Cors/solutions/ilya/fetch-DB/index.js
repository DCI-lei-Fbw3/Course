/* NOT WORKING */
/* html elements */
const submit = document.getElementById('submit');
const student = document.getElementById('student');
const month = document.getElementById('month');
const time = document.getElementById('time');
const tutor = document.getElementById('tutor');
const db = document.getElementById('database');
const spinner = document.getElementById('spinner');

/* get method */
const get = async (month, row) => {
    console.log('month in get:', month);
    const r = await fetch(`https://api.sheetson.com/v2/sheets/${month}${row}`,
        {
            headers: {
                "Authorization": "Bearer <INSERT TOKEN HERE !>",
                "X-Spreadsheet-Id": "<INSERT ID HERE !>"
            }
        })
    const rObj = await r.json();
    return rObj;
}

/* post method */
const post = async (student, month, time, tutor) => {
    const r = await fetch(`https://api.sheetson.com/v2/sheets/${month}`,
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer OwcSn47JlTtIcMtfRv3yRRVF-h9Wd1V2lvXC3jqoEG3WKa8jPtw5OpeO3bA",
                "X-Spreadsheet-Id": "1Sv_DAFalR-QNYVV9_q2NEmk9J7WlP8ltm6Tw5s4m3JI",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ student: `${student}`, month: `${month}`, time: `${time}`, "tutor": `${tutor}` })
        });
    const rObj = await r.json();
    console.log('following entry posted:', rObj);
    return rObj;
}


const displayDB = () => {
    get('December', '')
        .then(table => {
            db.innerHTML =  `
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Month</th>
                                    <th>Time</th>
                                    <th>Tutor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            `;
            table.results.forEach(entry => {
                const bg = entry.rowIndex % 2 === 0 ? 'primary' : 'info';
                db.tBodies[0].innerHTML = '';
                console.log('entry:', entry);
                db.tBodies[0].innerHTML += `
                                    <tr class="table-${bg}">
                                        <td>${entry.rowIndex-1}</td>
                                        <td>${entry.student}</td>
                                        <td>${entry.date}</td>
                                        <td>${entry.time}</td>
                                        <td>${entry.tutor}</td>
                                    </tr>
                                `;
            });
            spinner.classList.add('d-none');
        })
        .catch(e => console.log('Something went wrong:', e));
}

displayDB();

/* submit.addEventListener('click', (e) => {
    console.log('clicked on submit button, e.target:', e.target);
    post(student.value, month.value, time.value, tutor.value)
    .then(() => displayDB());
    e.preventDefault();
});
post(student.value, month.value, time.value, tutor.value)
    .then(() => {displayDB(); console.log('displayDB() executed')});
 */
