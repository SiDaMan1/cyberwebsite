} from "@chakra-ui/react";

function App() {
  // This part is javascript code
const tweets = [
    {
      name: "Maya Johnson",
      username: "@maya_codes",
      time: "2m",
      text: "Just got my first React page running. Components are starting to make sense.",
      likes: 14,
      replies: 3,
      tag: "Web Dev",
    },
    {
      name: "Ethan Brooks",
      username: "@ethanbuilds",
      time: "12m",
      text: "Hardcoding data first helps me focus on the page layout before adding real input.",
      likes: 22,
      replies: 5,
      tag: "React",
    },
    {
      name: "Ava Smith",
      username: "@ava_secure",
      time: "25m",
      text: "A .map() lets us turn an array of data into repeated cards on the screen.",
      likes: 31,
      replies: 8,
      tag: "Cyber 301",
    },
  ];
  {
    "name": "Maya Johnson",
    "username": "@maya_codes",
    "createdAt": "2026-05-03T09:58:00.000Z",
    "text": "Just got my first React page running. Components are starting to make sense.",
    "likes": 14,
    "replies": 3,
    "tag": "Web Dev"
  },
  {
    "name": "Ethan Brooks",
    "username": "@ethanbuilds",
    "createdAt": "2026-05-02T09:48:00.000Z",
    "text": "Hardcoding data first helps me focus on the page layout before adding real input.",
    "likes": 22,
    "replies": 5,
    "tag": "React"
  },
  {
    "name": "Ava Smith",
    "username": "@ava_secure",
    "createdAt": "2026-05-01T09:35:00.000Z",
    "text": "A .map() lets us turn an array of data into repeated cards on the screen.",
    "likes": 31,
    "replies": 8,
    "tag": "Cyber 301"
  }
];

  // Save the current time once during this render.
  const currentTime = new Date().toISOString();

  // Helper function that turns a date into "now", "2m", "3h", or "2d".
  const timeAgo = (iso?: string) => {
    if (!iso) return "now";
    const diff = new Date(currentTime).getTime() - new Date(iso).getTime();
    const sec = Math.floor(diff / 1000);
    if (sec < 60) return "now";
    const min = Math.floor(sec / 60);
    if (min < 60) return `${min}m`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}h`;
    const day = Math.floor(hr / 24);
    return `${day}d`;
  };


return (
<Box bg="gray.900" minH="100vh" py={8}>
@@ -93,7 +110,7 @@ function App() {
<Badge colorPalette="blue">{tweet.tag}</Badge>
</HStack>
<Text color="gray.400" fontSize="sm">
                      {tweet.username} · {tweet.time}
                      {tweet.username} · {timeAgo(tweet.createdAt)}
</Text>
</Box>
</HStack>