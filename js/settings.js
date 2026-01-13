
const Settings =
[
    "https://avatars.githubusercontent.com/u/225839283?v=4", // Avatar
    "ThreeMonthAgo", // Name
    [ // Tags
        "C#",
        "Java",
        "C (weak)",
        "English",
        "Chinese",
    ],
    "ThreeMonthAgo's Blog" // title
];

// set icon
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = Settings[0];
document.head.appendChild(link);
