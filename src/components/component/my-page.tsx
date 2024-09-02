import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import React from 'react';
import Image from "next/image";
interface GitHubIconProps extends React.SVGProps<SVGSVGElement> {
  // Add any additional props specific to GitHubIcon here if needed
}


export function MyPage() {
  return (
    
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-2 px-4 md:px-6 flex items-center justify-between">
        <div className="text-lg font-semibold"><a href="#">rjaswal1634.tech</a></div>
        <Link
          href="https://docs.google.com/document/d/1Mwubbrl8nD8DykP5NCn-7Naize5WF9K1o14ltgTsTy0/edit?usp=sharing"
          className="inline-flex h-8 items-center justify-center rounded-md bg-primary-foreground px-4 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Download Resume
        </Link>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Avatar className="h-32 w-32 md:h-40 md:w-40">
              <AvatarImage src="/placeholder-user.jpg" alt="Rahul Chaudhari" />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rahul Chaudhari</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m a dedicated software engineer and leader with a passion for building innovative web applications, 
                enhancing efficiency in time management systems, and advancing research in AI and neural networks.
              </p>
            </div>
          </div>
          <Image
            src="/profie.jpg"
            width={550}
            height={550}
            alt="Rahul Chaudhari"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"></div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get to Know Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Currently pursuing a BS in Computer Science with minors in Business Administration and Data Science, 
              I have achieved a perfect GPA while leading organizations such as the Google Developer Student Club 
              at Truman State University. My skills span across Python, JavaScript, TypeScript, Flutter, and web 
              development, with a keen interest in cybersecurity and leadership.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-muted-foreground">
                BS in Computer Science, Truman State University (GPA: 4.0, Expected Graduation: May 2026)
              </p>
              <p className="text-muted-foreground">
              CodePath : Completed Intermediate Technical Interview Prep Course (TIP102) in Summer 2024
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Skills</h3>
              <p className="text-muted-foreground"> C++, Java, C, Bash, Python, Linux Operating, Flutter, SQL, Web Development, RStudio, Database Management,
              DSA, Team Management, Event Planning & Organization, Kali Linux, Amazon Web Services, MongoDB, Docker, Node.js</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Interests</h3>
              <p className="text-muted-foreground">Cyber Security, Business Strategy & Operations, Leadership, Mobile Photography, Teaching, Entrepreneurship</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid gap-6 px-4 md:px-6">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Work</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Image
                  src="/apple.jpg"
                  width={400}
                  height={225}
                  alt="Apple Leaf Disease Detection"
                  className="aspect-[16/9] overflow-hidden rounded-t-xl object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Apple Leaf Disease Detection</h3>
                <p className="text-muted-foreground">
                  Developed a Deep Hybrid Attention Network for detecting Apple Leaf Diseases with 100% accuracy in 
                  binary classification and 99.84% accuracy across 13 categories.
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://drive.google.com/file/d/14MW_35rUsxmTvsIaRS8Xs5UzFggBze-E/view"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Read the Paper
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/server.jpg"
                  width={400}
                  height={225}
                  alt="Clock-In/Clock-Out System"
                  className="aspect-[16/9] overflow-hidden rounded-t-xl object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold"> Personal Webserver on My Old PC</h3>
                <p className="text-muted-foreground">
                Transformed an old PC into a personal web server using Apache2, 
                integrated with a custom domain and SSL through Cloudflare and Let&apos;s Encrypt. 
                Overcame hardware and software challenges, resulting in a cost-effective, 
                self-hosted website solution. The website is currently live at rjaswal1634.tech.
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/rjaswal1634/WebServer"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="https://github.com/rjaswal1634"
                    className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    More Such Projects on GitHub
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/truhacks.png"
                  width={400}
                  height={225}
                  alt="TruHacks"
                  className="aspect-[16/9] overflow-hidden rounded-t-xl object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">TruHacks</h3>
                <p className="text-muted-foreground">
                  Pioneered the inaugural Inter-College International Hackathon, raising over $8000 and attracting 112 
                  participants globally, with a website developed to engage over 500 unique student visitors.
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://truhacks.truman.edu/"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Visit TruHacks Website
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Connect with Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Me Online</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connect with me on social media to stay up-to-date with my latest projects and activities. 
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
              href="https://www.facebook.com/rjaswal1634/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
          <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/rjaswal1634/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/rjaswal1634/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/rjaswal1634"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <GitHubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function GitHubIcon(props: GitHubIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.237-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.983-.399 3.005-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.655 1.652.243 2.873.12 3.176.77.839 1.234 1.91 1.234 3.22 0 4.609-2.804 5.623-5.475 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .32.192.694.8.577C20.565 22.09 24 17.593 24 12.297 24 5.67 18.627.297 12 .297z" />
    </svg>
  )
}

function FacebookIcon(props: GitHubIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props : GitHubIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function LinkedinIcon(props : GitHubIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
