import { Accordion, Button, Footer, Text, Link } from "@/components";
import { workExperience } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container pt-[125px] space-y-10 sm:space-y-20">
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
            I&lsquo;m a Front-end Developer well-versed in React and Typescript.
            I enjoy creating robust digital products. Currently, I&lsquo;m
            focused on building building accessible and human-centric products
            at <Link isBold>4X Software</Link>.
          </Text>
          <div className="space-x-4">
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
        <div className="h-32 lg:h-full rounded-lg bg-base-200"></div>
      </section>
      {/* Skills */}
      <section>
        <Text variant="h3" className="pb-4">
          Skills & Knowledge
        </Text>
      </section>
      {/* Personal Projects */}
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
            For more info, download my resume <Link>here</Link>.
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
        <Text variant="h3" className="pb-8">
          Personal Projects
        </Text>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-32 rounded-lg bg-base-200"></div>
          <div className="h-32 rounded-lg bg-base-200"></div>
          <div className="h-32 rounded-lg bg-base-200"></div>
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
        <Text variant="small-p" colorStyle="secondary" className="pb-8">
          Download my full resume right <Link>here</Link>.
        </Text>
        <div className="flex gap-x-8">
          <Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37 0 0 5.373 0 12C0 17.303 3.438 21.8 8.205 23.385C8.805 23.498 9.025 23.127 9.025 22.808C9.025 22.523 9.015 21.768 9.01 20.768C5.672 21.492 4.968 19.158 4.968 19.158C4.422 17.773 3.633 17.403 3.633 17.403C2.546 16.659 3.717 16.674 3.717 16.674C4.922 16.758 5.555 17.91 5.555 17.91C6.625 19.745 8.364 19.215 9.05 18.908C9.158 18.132 9.467 17.603 9.81 17.303C7.145 17.003 4.344 15.971 4.344 11.373C4.344 10.063 4.809 8.993 5.579 8.153C5.444 7.85 5.039 6.63 5.684 4.977C5.684 4.977 6.689 4.655 8.984 6.207C9.944 5.94 10.964 5.808 11.984 5.802C13.004 5.808 14.024 5.94 14.984 6.207C17.264 4.655 18.269 4.977 18.269 4.977C18.914 6.63 18.509 7.85 18.389 8.153C19.154 8.993 19.619 10.063 19.619 11.373C19.619 15.983 16.814 16.998 14.144 17.293C14.564 17.653 14.954 18.389 14.954 19.513C14.954 21.119 14.939 22.409 14.939 22.799C14.939 23.114 15.149 23.489 15.764 23.369C20.565 21.795 24 17.295 24 12C24 5.373 18.627 0 12 0Z"
                className="fill-primary hover:fill-secondary"
              />
            </svg>
          </Link>
          <Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C5.06588 7.43313 4.79739 7.37979 4.54691 7.27604C4.29642 7.17229 4.06886 7.02015 3.87724 6.82835C3.68562 6.63654 3.53371 6.40883 3.43019 6.15825C3.32668 5.90766 3.27361 5.63912 3.274 5.368C3.2742 4.95978 3.39544 4.56078 3.6224 4.22147C3.84936 3.88216 4.17184 3.61777 4.54907 3.46173C4.92629 3.30569 5.34131 3.26502 5.74165 3.34485C6.14198 3.42469 6.50966 3.62144 6.79817 3.91024C7.08669 4.19903 7.28309 4.5669 7.36254 4.96731C7.44198 5.36773 7.40091 5.78271 7.2445 6.15978C7.0881 6.53685 6.8234 6.85908 6.48387 7.08571C6.14433 7.31234 5.74522 7.4332 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                className="fill-primary hover:fill-secondary"
              />
            </svg>
          </Link>
          <Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5848 4.77974C13.4188 4.77974 15.1429 5.59077 16.4089 6.8598V6.8638C16.4089 6.25478 16.8189 5.79577 17.3879 5.79577H17.5329C18.4239 5.79577 18.606 6.6378 18.606 6.9048L18.611 16.3801C18.548 17.0011 19.251 17.3211 19.64 16.9231C21.161 15.359 22.9821 8.88486 18.694 5.13275C14.6978 1.63566 9.33669 2.21167 6.48461 4.17773C3.45353 6.26879 1.51348 10.8959 3.39853 15.242C5.45259 19.9822 11.3297 21.3942 14.8228 19.9862C16.5919 19.2711 17.4089 21.6622 15.5719 22.4432C12.7958 23.6273 5.06957 23.5073 1.46147 17.2551C-0.977594 13.034 -0.84759 5.60577 5.61959 1.75766C10.5667 -1.18542 17.0899 -0.3704 21.022 3.73671C25.1331 8.03083 24.8941 16.0711 20.883 19.1981C19.067 20.6182 16.3669 19.2351 16.3849 17.1671L16.3659 16.4891C15.1009 17.7451 13.4178 18.4771 11.5838 18.4771C7.95866 18.4771 4.77057 15.288 4.77057 11.6649C4.77057 8.00583 7.95966 4.77974 11.5848 4.77974ZM16.1459 11.4029C16.0089 8.74985 14.0398 7.15381 11.6618 7.15381H11.5718C8.82668 7.15381 7.30364 9.31287 7.30364 11.7639C7.30364 14.511 9.14569 16.2451 11.5598 16.2451C14.2528 16.2451 16.0239 14.272 16.1519 11.9389L16.1459 11.4029Z"
                className="fill-primary hover:fill-secondary"
              />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
