const list = [{
        name: '2022',
        date: 1640962800
    },
    {
        name: 'CSAT',
        date: 1668610800
    },
    {
        name: '2023',
        date: 1672498800
    }
];

const construct = (text, date) => {
    const node = document.createElement("d-day");

    const textnode = document.createElement("text");
    textnode.textContent = text;

    const datenode = document.createElement("days");
    const diff = new Date().getTime() - date.getTime();

    // TODO: Need to fix date calculation.
    const calc = Math.floor(diff / (1000 * 60 * 60 * 24));
    datenode.textContent = calc === 0 ? 'D-DAY' : `D${calc >= 0 ? '+' : ''}${calc}`;

    node.appendChild(textnode);
    node.appendChild(datenode);

    return node;
}
window.initdday = () => {
    const ddaylist = document.querySelector("body > div > d-day-list");
    ddaylist.textContent = ''; // Clearing child nodes.
    list.forEach(item => {
        ddaylist.appendChild(construct(item.name, new Date(item.date * 1000)));
    });
}