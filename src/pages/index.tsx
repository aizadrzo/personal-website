import { Accordion, Button, Text, Link } from "@/components";
import {
  workExperience,
  projectDetails,
  skills,
  contactDetails,
} from "@/constants";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-20">
      {/* Header */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="w-min text-4xl md:text-5xl pb-4 animate-wiggle-more animate-infinite animate-ease-in-out">
            👋
          </div>
          <Text variant="h2" className="pb-4">
            Hi, I’m Aizad Ridzo.
          </Text>
          <Text variant="p" colorStyle="secondary" className="pb-8">
            I&lsquo;m a Front-end Developer 🧑🏻‍💻 well-versed in React and
            Typescript. I enjoy creating robust digital products. Currently,
            I&lsquo;m focused on building building accessible and human-centric
            products at <Link isBold>4X Software</Link>.
          </Text>
          <div className="flex flex-col space-y-2 content-center sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button variant="contain">Check Out My Projects</Button>
            <Button variant="outline">Hit Me Up</Button>
          </div>
        </div>
      </section>
      {/* About Me */}
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
            Check out my <Link>LinkedIn</Link> & <Link>Github</Link>.
          </Text>
        </div>
        <div className="stack">
          <div className="h-32 lg:h-full rounded-lg bg-base-200"></div>
          <div className="h-32 lg:h-full rounded-lg bg-base-300"></div>
          <div className="h-32 lg:h-full rounded-lg bg-base-400"></div>
        </div>
      </section>
      {/* Skills */}
      <section>
        <Text variant="h3" className="pb-8">
          Languages & Frameworks
        </Text>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {skills.map((skill, idx) => (
            <div
              className="card border-2 border-base-300 bg-base-200"
              key={idx}
            >
              <div className="card-body">
                <div className="w-8 pb-2">{skill.icon}</div>
                <Text variant="p" className="font-semibold card-title">
                  {skill.name}
                </Text>
                <Text variant="small-p" colorStyle="secondary">
                  {skill.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Experience */}
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
            For more info, download my resume 👉 <Link>here</Link>.
          </Text>
        </div>
        <Accordion>
          {workExperience.map((content, idx) => (
            <Accordion.Tab
              title={content.title}
              key={idx}
              openByDefault={idx === 0}
            >
              <span className="flex items-center justify-between pb-4">
                <Text variant="small-p" colorStyle="secondary">
                  {content.company}
                </Text>
                <Text variant="small-p" colorStyle="secondary">
                  {content.timeline}
                </Text>
              </span>
              <Text variant="small-p" colorStyle="secondary">
                {content.description}
              </Text>
            </Accordion.Tab>
          ))}
        </Accordion>
      </section>
      {/* Projects */}
      <section>
        <Text variant="h3" className="pb-8">
          Work Projects
        </Text>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {projectDetails.map((project, idx) => (
            <div
              className="card border-2 border-base-300 bg-base-200"
              key={idx}
            >
              <div className="card-body">
                <Text variant="p" className="font-semibold card-title">
                  {project.title}
                </Text>
                <Text variant="small-p" colorStyle="secondary">
                  {project.description}
                </Text>
                <div className="flex space-x-4 justify-end">
                  <Button variant="link">Github</Button>
                  <Button variant="link">Website</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Card */}
      <section className="flex flex-col items-center">
        <div className="pb-4 avatar online">
          <div className="w-24 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
            />
          </div>
        </div>
        <Text variant="h3" className="pb-4">
          Get in Touch with Me
        </Text>
        <Text variant="small-p" colorStyle="secondary" className="pb-6">
          Download my full resume right <Link>here</Link>.
        </Text>
        <div className="flex gap-x-8">
          {contactDetails.map((detail) => (
            <Link href={detail.link} target="_blank" key={detail.name}>
              <div className="w-8 text-primary hover:text-secondary">
                {detail.icon}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
