import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import tweetsData from "./data/tweets.json";
import type { Tweet } from "./types/Tweet";



function timeAgo(createdAt: string): string {
  const now = new Date();
  const created = new Date(createdAt);
  const seconds = Math.floor((now.getTime() - created.getTime()) / 1000);

  if (seconds < 60) return "now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

function App() {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsData as Tweet[]);
  const [input, setInput] = useState("");

  // Creates a new tweet from the input box and adds it to the top of the list
  const handleYap = () => {
    if (!input.trim()) return;

    const newTweet: Tweet = {
      id: Date.now(),
      name: "Student",
      username: "@you",
      createdAt: new Date().toISOString(),
      text: input.trim(),
      likes: 0,
      replies: 0,
      tag: "New",
    };

    setTweets([newTweet, ...tweets]);
    setInput("");
  };

  return (
    <Box bg="gray.900" minH="100vh" py={8}>
      <Container maxW="650px">
        <VStack gap={5} align="stretch">
          <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="md">
            <Heading size="lg" color="white">
              Yapper
            </Heading>
            <Text color="gray.400" mt={2}>
              A simple Twitter-style homepage built with React and Chakra UI.
            </Text>
          </Box>

          <Box bg="gray.800" p={5} borderRadius="2xl" boxShadow="md">
            <VStack gap={3} align="stretch">
              <Text fontWeight="bold" color="white">
                Create a post
              </Text>
              <Input
                placeholder="What's happening?"
                bg="gray.700"
                borderColor="gray.600"
                color="white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button alignSelf="flex-end" bg="blue.500" color="white" onClick={handleYap}>
                Yap
              </Button>
            </VStack>
          </Box>

          {tweets.map((tweet) => (
            <Box
              key={tweet.id}
              bg="gray.800"
              p={5}
              borderRadius="2xl"
              boxShadow="md"
              border="1px solid"
              borderColor="gray.700"
            >
              <VStack align="stretch" gap={3}>
                <HStack justify="space-between" align="start">
                  <Box>
                    <HStack>
                      <Text fontWeight="bold" color="white">
                        {tweet.name}
                      </Text>
                      <Badge colorPalette="blue">{tweet.tag}</Badge>
                    </HStack>
                    <Text color="gray.400" fontSize="sm">
                      {tweet.username} · {timeAgo(tweet.createdAt)}
                    </Text>
                  </Box>
                </HStack>

                <Text color="white">{tweet.text}</Text>

                <HStack gap={6} color="gray.400" fontSize="sm">
                  <Text>💬 {tweet.replies}</Text>
                  <Text>❤️ {tweet.likes}</Text>
                  <Text>🔁 Share</Text>
                </HStack>
              </VStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default App;