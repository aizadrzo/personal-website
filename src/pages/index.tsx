import { Accordion, Button, Footer, Text } from "@/components";
import { workExperience } from "@/constants";

export default function Home() {
  return (
    <main className="container pt-[125px] space-y-10 sm:space-y-20">
      <section>
        <div className="w-min text-4xl md:text-5xl pb-4 animate-wiggle-more animate-infinite animate-ease-in-out">
          👋
        </div>
        <Text variant="h2" className="pb-4">
          Hi, I’m Aizad Ridzo.
        </Text>
        <Text
          variant="p"
          colorStyle="secondary"
          className="pb-8 sm:w-5/6 md:w-4/6"
        >
          I&lsquo;m a Front-end Developer well-versed in React and Typescript. I
          enjoy creating robust digital products. Currently, I&lsquo;m focused
          on building building accessible and human-centric products at{" "}
          <a className="link underline-offset-2 text-neutral-900">
            4X Software
          </a>
          .
        </Text>
        <div className="space-x-4">
          <Button variant="contain">Check Out My Projects</Button>
          <Button variant="outline">Hit Me Up</Button>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <Text variant="h3" className="pb-4">
            About Me
          </Text>
          <Text variant="p" colorStyle="secondary" className="lg:w-5/6 pb-8">
            nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
            cursus vitae congue mauris rhoncus aenean vel elit scelerisque
            mauris pellentesque pulvinar pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere morbi leo urna molestie at elementum eu
            facilisis sed odio
            <br />
            <br />
            nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
            cursus vitae congue mauris rhoncus aenean vel elit scelerisque
            mauris pellentesque pulvinar pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere morbi leo urna molestie at elementum eu
            facilisis sed odio
          </Text>
          <Text variant="small-p" colorStyle="secondary">
            Check out my{" "}
            <a className="link underline-offset-2">
              <Text variant="small-p">LinkedIn</Text>
            </a>{" "}
            &{" "}
            <a className="link underline-offset-2">
              <Text variant="small-p">Github</Text>
            </a>
            .
          </Text>
        </div>
        <div className="h-32 lg:h-full rounded-lg bg-base-200"></div>
      </section>
      <section>
        <Text variant="h3" className="pb-4">
          Skills & Frameworks
        </Text>
        <Text
          variant="p"
          colorStyle="secondary"
          className="pb-8 sm:w-5/6 md:w-4/6"
        >
          nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque
        </Text>
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <Text variant="h3" className="pb-4">
            Work Experience
          </Text>
          <Text variant="p" colorStyle="secondary" className="pb-8">
            nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
            cursus vitae congue mauris rhoncus aenean vel elit scelerisque
            mauris pellentesque pulvinar pellentesque
          </Text>
          <Text variant="small-p" colorStyle="secondary" className="pb-8">
            For more info, download my resume{" "}
            <a className="link underline-offset-2 text-neutral-900">here</a>.
          </Text>
        </div>
        <Accordion>
          {workExperience.map((content, idx) => (
            <Accordion.Tab
              title={content.title}
              key={idx}
              openByDefault={idx === 0}
            >
              {content.description}
            </Accordion.Tab>
          ))}
        </Accordion>
      </section>
      <section>
        <Text variant="h3" className="pb-4">
          Personal Projects
        </Text>
        <Text
          variant="p"
          colorStyle="secondary"
          className="pb-8 sm:w-5/6 md:w-4/6"
        >
          nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque
        </Text>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-32 rounded-lg bg-base-200"></div>
          <div className="h-32 rounded-lg bg-base-200"></div>
          <div className="h-32 rounded-lg bg-base-200"></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
