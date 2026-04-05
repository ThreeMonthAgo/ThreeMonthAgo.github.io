
const Settings =
{
    Avatar : "https://avatars.githubusercontent.com/u/225839283?v=4",
    Name : "ThreeMonthAgo",
    Tags : [
        "C#",
        "Java",
        "C (weak)",
        "English",
        "Chinese",
    ],
    Title : "ThreeMonthAgo's Blog"
};

// set icon
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = Settings.Avatar;
document.head.appendChild(link);
