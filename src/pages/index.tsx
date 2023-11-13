import { Button } from "@/component";

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
    </div>
  );
}
