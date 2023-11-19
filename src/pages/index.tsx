import { Button, Text } from "@/components";

export default function Home() {
  return (
    <div>
      <Button variant="contain" size="lg">
        Click Me
      </Button>
      <Button variant="ghost" size="lg">
        Click Me
      </Button>
      <Button variant="outline" size="lg">
        Click Me
      </Button>
      <Text variant="h1" color="less-general">
        This is a test
      </Text>
      <Text variant="h2">This is a test</Text>
      <Text variant="h3" color="blue">
        This is a test
      </Text>
      <Text variant="p" color="red">
        This is a test
      </Text>
      <Text variant="small" color="less-general">
        This is a test
      </Text>
    </div>
  );
}
