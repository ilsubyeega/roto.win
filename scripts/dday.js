const list = [{
        name: '2022',
        date: 1640962800000
    },
    {
        name: '1st exam',
        date: 1650812400000
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
    datenode.textContent = calc == 0 ? 'D-DAY' : `D${calc >= 0 ? '+' : ''}${calc}`;

    node.appendChild(textnode);
    node.appendChild(datenode);

    return node;
}
window.initdday = () => {
    const ddaylist = document.querySelector("body > div > d-day-list");
    ddaylist.textContent = ''; // Clearing child nodes.
    list.forEach(item => {
        ddaylist.appendChild(construct(item.name, new Date(item.date)));
    });
}