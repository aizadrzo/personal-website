import { Button, Text } from "@/components";

export default function Home() {
  return (
    <main className="container pt-[125px] space-y-10 sm:space-y-20">
      <div>
        <div className="text-4xl md:text-5xl pb-4">👋</div>
        <Text variant="h2" className="pb-4">
          Hi, I’m Aizad Ridzo.
        </Text>
        <Text
          variant="p"
          colorStyle="less-prominent"
          className="pb-8 sm:w-5/6 md:w-4/6"
        >
          I&lsquo;m a Front-end Developer well-versed in React and Typescript. I
          enjoy creating robust digital products. Currently, I&lsquo;m focused
          on building building accessible and human-centric products at{" "}
          <a className="font-semibold cursor-pointer">Deriv</a>.
        </Text>
        <div className="flex align-bottom gap-x-4">
          <Button variant="contain">Check Out My Projects</Button>
          <Button variant="outline">Hit Me Up</Button>
        </div>
      </div>
      <div>
        <Text variant="h3" className="pb-4">
          About Me
        </Text>
        <Text
          variant="p"
          colorStyle="less-prominent"
          className="sm:w-5/6 md:w-4/6 pb-8"
        >
          nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas maecenas pharetra
          convallis posuere morbi leo urna molestie at elementum eu facilisis
          sed odio
        </Text>
      </div>
      <div>
        <Text variant="h3" className="pb-4">
          Work Experience
        </Text>
        <Text
          variant="p"
          colorStyle="less-prominent"
          className="sm:w-5/6 md:w-4/6 pb-8"
        >
          nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas maecenas pharetra
          convallis posuere morbi leo urna molestie at elementum eu facilisis
          sed odio
        </Text>
      </div>
      <div>
        <Text variant="h3" className="pb-4">
          Personal Projects
        </Text>
        <Text
          variant="p"
          colorStyle="less-prominent"
          className="sm:w-5/6 md:w-4/6 pb-8"
        >
          nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas maecenas pharetra
          convallis posuere morbi leo urna molestie at elementum eu facilisis
          sed odio
        </Text>
      </div>
    </main>
  );
}
