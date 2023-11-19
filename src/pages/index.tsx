import { Button, Text } from "@/components";

export default function Home() {
  return (
    <main className="container pt-[125px] space-y-10 sm:space-y-20">
      <div>
        <Text variant="h2" className="pb-4">
          Hi, I’m Aizad Ridzo.
        </Text>
        <Text variant="p" color="less-general" className="pb-8 md:w-4/6">
          I&lsquo;m a Front-end Developer well-versed in React and Typescript. I
          enjoy creating robust digital products. Currently, I&lsquo;m a part of
          the Trader&lsquo;s Hub squad in Deriv.
        </Text>
        <div className="flex align-bottom gap-x-4">
          <Button variant="contain">Check Out My Projects</Button>
          <Button variant="outline">Hit Me Up</Button>
        </div>
      </div>
      <div>
        <Text variant="h3">Work Experience</Text>
      </div>
      <div>
        <Text variant="h3">Personal Projects</Text>
      </div>
    </main>
  );
}
