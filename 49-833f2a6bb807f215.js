"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[49], {
    4303: function(e, t, n) {
        n.d(t, {
            default: function() {
                return l
            }
        });
        var i = n(7437)
          , a = n(7648)
          , s = n(6675)
          , o = n(3264)
          , r = n(181);
        function l(e) {
            var t, n;
            let {isSticky: l, noAnimate: c} = e;
            return (0,
            i.jsxs)(o.E.footer, {
                variants: l ? (0,
                r.xq)(1) : (0,
                r.P6)(1),
                initial: c ? "visible" : "hidden",
                animate: "visible",
                className: "text-center lg:text-left text-slate-350 text-[9px] w-full mt-8 ".concat(c && "!block lg:!block p-2 lg:!text-center", " ").concat(l ? "hidden lg:block" : "lg:hidden"),
                children: [(0,
                i.jsxs)("p", {
                    className: "mb-0 leading-none",
                    children: ["Made with ❤️ by", " ", (0,
                    i.jsx)(a.default, {
                        className: "underline uppercase font-bold text-blue-400 hover:text-pink-400 transition-colors duration-300",
                        href: null !== (n = null === (t = s.J.socialLinks.find(e => e.url.includes("github"))) || void 0 === t ? void 0 : t.url) && void 0 !== n ? n : "/",
                        children: s.J.alias
                    })]
                }), (0,
                i.jsxs)("p", {
                    className: "mb-0 text-[8px]",
                    children: ["\xa9 2024 ", s.J.title, ". All rights reserved."]
                })]
            })
        }
    },
    6167: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return r
            }
        });
        var i = n(7437)
          , a = n(4922)
          , s = n(3264)
          , o = n(2265);
        function r(e) {
            let {tag: t, children: n, variants: r, initial: l, animate: c, className: d, once: m=!0, transition: p={
                duration: .3
            }, ...u} = e
              , g = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 768
                  , [t,n] = (0,
                o.useState)(!1);
                return (0,
                o.useEffect)( () => {
                    let t = () => {
                        n(window.innerWidth < e)
                    }
                    ;
                    return t(),
                    window.addEventListener("resize", t),
                    () => window.removeEventListener("resize", t)
                }
                , [e]),
                t
            }()
              , x = (0,
            o.useRef)(null)
              , h = (0,
            a.Y)(x, {
                once: m,
                margin: "-150px"
            });
            return (0,
            i.jsx)(i.Fragment, {
                children: "h1" === t ? (0,
                i.jsx)(s.E.h1, {
                    ref: x,
                    variants: r,
                    initial: g ? "visible" : l,
                    animate: h ? c : l,
                    transition: p,
                    className: d,
                    children: n
                }) : (0,
                i.jsx)(s.E.div, {
                    ref: x,
                    variants: r,
                    initial: g ? "visible" : l,
                    animate: h ? c : l,
                    transition: p,
                    className: d,
                    children: n
                })
            })
        }
    },
    905: function(e, t, n) {
        n.d(t, {
            default: function() {
                return l
            }
        });
        var i = n(7437)
          , a = n(7648)
          , s = n(6675)
          , o = n(181)
          , r = n(6167);
        function l(e) {
            let {isSticky: t, noAnimate: n} = e
              , l = !1;
            return l = window.matchMedia("(max-width: 1024px)").matches,
            (0,
            i.jsx)(r.default, {
                tag: "div",
                variants: l ? (0,
                o.P6)(1) : (0,
                o.xq)(1),
                initial: n ? "visible" : "hidden",
                animate: "visible",
                className: "w-full lg:pt-0 lg:pl-1 ".concat(t ? "pt-12" : "lg:hidden py-4", " ").concat(n && "!flex !lg:flex justify-center p-2"),
                children: (0,
                i.jsx)("ul", {
                    className: "flex justify-center lg:justify-start gap-4",
                    children: s.J.socialLinks.map(e => (0,
                    i.jsx)("li", {
                        children: (0,
                        i.jsx)(a.default, {
                            className: "text-2xl hover:text-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer",
                            href: e.url,
                            target: "_blank",
                            children: e.icon
                        })
                    }, e.url))
                })
            })
        }
    },
    6675: function(e, t, n) {
        n.d(t, {
            J: function() {
                return p
            }
        });
        var i = n(7437)
          , a = n(9089)
          , s = n(1273)
          , o = n(4295)
          , r = n(4154)
          , l = n(2909)
          , c = n(3257)
          , d = n(5168)
          , m = n(9978);
        let p = {
            name: "Alvin Chang",
            title: "Alvin Chang | Full-Stack Developer",
            email: "alvin@studioaurora.io",
            alias: "Aurora",
            description: "Alvin Chang is a web developer who builds scalable, user-centric applications using Next.js, WordPress, and other frameworks. With a focus on performance, accessibility, and clean code, Alvin creates digital solutions that are both functional and aesthetically pleasing.",
            keywords: "Alvin Chang, full-stack developer, web development, Next.js, WordPress, React, Node.js, scalable applications, clean code",
            url: "https://alvinchang.dev",
            taglines: ["\uD83D\uDE80 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!", "\uD83C\uDFA8 Where Code Meets Creativity: Building Digital Experiences that Matter. \uD83C\uDF10 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.", "\uD83D\uDCA1 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. \uD83C\uDF1F From concept to completion, let’s build the future, one pixel and one line of code at a time."],
            titles: ["Full-Stack Developer", "NextJS Developer", "Wordpress Developer"],
            socialLinks: [{
                icon: (0,
                i.jsx)(a.hJX, {}),
                url: "https://github.com/auroradream04"
            }, {
                icon: (0,
                i.jsx)(s.ltd, {}),
                url: "https://www.linkedin.com/in/auroradream04/"
            }, {
                icon: (0,
                i.jsx)(s.lcJ, {}),
                url: "https://x.com/aurora_dream04"
            }, {
                icon: (0,
                i.jsx)(s.j2d, {}),
                url: "https://discord.gg/pwYGjDebkF"
            }, {
                icon: (0,
                i.jsx)(o.GX9, {}),
                url: "mailto:alvin@studioaurora.io"
            }],
            sections: {
                tableOfContents: [{
                    id: "about-me",
                    label: "ABOUT ME"
                }, {
                    id: "experiences",
                    label: "EXPERIENCES"
                }, {
                    id: "projects",
                    label: "PROJECTS"
                }, {
                    id: "technologies",
                    label: "TECHNOLOGIES"
                }, {
                    id: "blogs",
                    label: "BLOGS"
                }, {
                    id: "contact",
                    label: "CONTACT"
                }],
                aboutMe: "\n            <p>\n                Hi! I'm Alvin, a <strong>full-stack developer</strong> who started coding in <strong>2023</strong>. Since then, I've built <strong>streaming platforms</strong>, <strong>blogs</strong>, and <strong>e-commerce sites</strong>. Whether it’s front-end finesse or back-end logic, I love bringing ideas to life on the web.\n            </p>\n            <p>\n                When I’m not coding, you’ll find me playing <strong>Dota 2</strong>, cooking up new recipes, or streaming on <strong>Kick</strong>. Let's connect—I'd love to help with your next <strong>website</strong> or <strong>API</strong> project!\n            </p>\n        ",
                experiences: [{
                    company: "Studio Aurora",
                    position: "Founder | Lead Developer",
                    duration: "2024 - Present",
                    description: "Founded a web development agency focused on delivering high-quality websites and custom digital solutions. Lead the end-to-end development process, from client consultation and project planning to design implementation and deployment. Skilled in building scalable web apps, e-commerce platforms, and custom API integrations using modern frameworks like Next.js. Oversee a team of developers and coordinate projects to ensure timely delivery and client satisfaction."
                }, {
                    company: "Pingu Dev Inc.",
                    position: "Full-stack Engineer",
                    duration: "2023 - 2024",
                    description: "Developed various websites including streaming platforms, landing pages, and news sites using Next.js, WordPress, and Maccms. Built and managed APIs with Express.js, and leveraged web scraping to curate and generate content. Introduced automation processes to streamline workflows and built desktop applications with Electron for internal use."
                }],
                projects: [{
                    title: "Alvin Chang | Portfolio Website",
                    description: "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:",
                    logo: "/logox.png",
                    repoLink: "https://github.com/auroradream04/aurora-portfolio",
                    technologies: [{
                        icon: (0,
                        i.jsx)(r.tk3, {
                            className: "text-[#FFF]"
                        }),
                        name: "Next.js"
                    }, {
                        icon: (0,
                        i.jsx)(r.UYY, {
                            className: "text-[#06B6D4]"
                        }),
                        name: "Tailwind CSS"
                    }, {
                        icon: (0,
                        i.jsx)(l.wTA, {
                            className: "text-[#FFF]"
                        }),
                        name: "Shadcn/UI"
                    }, {
                        icon: (0,
                        i.jsx)(l.WZi, {
                            className: "text-[#3178C6]"
                        }),
                        name: "TypeScript"
                    }],
                    link: "https://alvinchang.dev"
                }, {
                    title: "Genzify AI",
                    description: "GenZify is an AI-powered tool I developed to transform everyday text into trendy Gen Z-style language. I managed both the front-end design and back-end development, integrating AI functionality for smooth and creative rephrasings. The platform delivers a fun, engaging experience, perfect for anyone looking to add a modern twist to their communication. This project highlights my skills in blending AI with user-centric design to create a playful, interactive web tool.",
                    logo: "/genzify-logo.png",
                    repoLink: "https://github.com/auroradream04/genzify-app",
                    technologies: [{
                        icon: (0,
                        i.jsx)(r.tk3, {
                            className: "text-[#FFF]"
                        }),
                        name: "Next.js"
                    }, {
                        icon: (0,
                        i.jsx)(r.Onx, {
                            className: "text-[#412991]"
                        }),
                        name: "OpenAI API"
                    }, {
                        icon: (0,
                        i.jsx)(r.UYY, {
                            className: "text-[#06B6D4]"
                        }),
                        name: "Tailwind CSS"
                    }, {
                        icon: (0,
                        i.jsx)(l.WZi, {
                            className: "text-[#3178C6]"
                        }),
                        name: "TypeScript"
                    }, {
                        icon: (0,
                        i.jsx)(l.wTA, {
                            className: "text-[#FFF]"
                        }),
                        name: "Shadcn/UI"
                    }],
                    link: "https://genzify-app-wine.vercel.app/"
                }, {
                    title: "WhatAboutPets",
                    description: "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
                    logo: "/whataboutpets-logo.png",
                    repoLink: "",
                    technologies: [{
                        icon: (0,
                        i.jsx)(r.tk3, {
                            className: "text-[#FFF]"
                        }),
                        name: "Next.js"
                    }, {
                        icon: (0,
                        i.jsx)(r.$ym, {
                            className: "text-[#21759B]"
                        }),
                        name: "WordPress"
                    }, {
                        icon: (0,
                        i.jsx)(l.WZi, {
                            className: "text-[#3178C6]"
                        }),
                        name: "TypeScript"
                    }, {
                        icon: (0,
                        i.jsx)(r.UYY, {
                            className: "text-[#06B6D4]"
                        }),
                        name: "Tailwind CSS"
                    }, {
                        icon: (0,
                        i.jsx)(l.wTA, {
                            className: "text-[#FFF]"
                        }),
                        name: "Shadcn/UI"
                    }, {
                        icon: (0,
                        i.jsx)(c.r0E, {
                            className: "text-[#E10098]"
                        }),
                        name: "GraphQL"
                    }, {
                        icon: (0,
                        i.jsx)(l.fIC, {
                            className: "text-[#96588A]"
                        }),
                        name: "Woocommerce"
                    }],
                    link: "https://whataboutpets.com"
                }, {
                    title: "丹丹影院 - ynct55.com",
                    description: "ynct55.com is a Chinese-language streaming platform offering free access to a diverse library of movies, TV shows, and anime. Managed all aspects of the project, from backend infrastructure and database setup to front-end design and user experience. Implemented efficient streaming solutions and optimized the platform for SEO to reach a broader audience. This project highlights my skills in building and maintaining a complete streaming site, tailored specifically for a Chinese-speaking user base.",
                    logo: "/ynct55-logo.png",
                    repoLink: "",
                    technologies: [{
                        icon: (0,
                        i.jsx)(r.tk3, {
                            className: "text-[#FFF]"
                        }),
                        name: "Next.js"
                    }, {
                        icon: (0,
                        i.jsx)(r.$ym, {
                            className: "text-[#21759B]"
                        }),
                        name: "WordPress"
                    }, {
                        icon: (0,
                        i.jsx)(l.WZi, {
                            className: "text-[#3178C6]"
                        }),
                        name: "TypeScript"
                    }, {
                        icon: (0,
                        i.jsx)(r.UYY, {
                            className: "text-[#06B6D4]"
                        }),
                        name: "Tailwind CSS"
                    }, {
                        icon: (0,
                        i.jsx)(l.wTA, {
                            className: "text-[#FFF]"
                        }),
                        name: "Shadcn/UI"
                    }, {
                        icon: (0,
                        i.jsx)(l.Xlc, {
                            className: "text-[#2D3748]"
                        }),
                        name: "Prisma"
                    }],
                    link: "https://www.ynct55.com"
                }],
                technologies: {
                    main: [{
                        name: "Next.js",
                        icon: (0,
                        i.jsx)(r.tk3, {
                            className: "text-[#FFF]"
                        }),
                        description: "A React framework"
                    }, {
                        name: "React",
                        icon: (0,
                        i.jsx)(l.QHr, {
                            className: "text-[#61DAFB]"
                        }),
                        description: "A JavaScript UI library"
                    }, {
                        name: "Tailwind CSS",
                        icon: (0,
                        i.jsx)(r.UYY, {
                            className: "text-[#06B6D4]"
                        }),
                        description: "A CSS framework"
                    }, {
                        name: "TypeScript",
                        icon: (0,
                        i.jsx)(l.WZi, {
                            className: "text-[#3178C6]"
                        }),
                        description: "Typed Javascript"
                    }, {
                        name: "Git",
                        icon: (0,
                        i.jsx)(l.zS0, {
                            className: "text-[#F05032]"
                        }),
                        description: "A version control system"
                    }, {
                        name: "Prisma",
                        icon: (0,
                        i.jsx)(l.Xlc, {
                            className: "text-[#4a5b77]"
                        }),
                        description: "An ORM for databases"
                    }, {
                        name: "WordPress",
                        icon: (0,
                        i.jsx)(r.$ym, {
                            className: "text-[#21759B]"
                        }),
                        description: "A CMS for websites"
                    }, {
                        name: "Express.js",
                        icon: (0,
                        i.jsx)(l.AmJ, {
                            className: "text-[#FFF]"
                        }),
                        description: "A Node.js framework"
                    }, {
                        name: "Puppeteer",
                        icon: (0,
                        i.jsx)(l.UtB, {
                            className: "text-[#7a56f1]"
                        }),
                        description: "A library for browser automation"
                    }],
                    other: [{
                        name: "HTML5",
                        icon: (0,
                        i.jsx)(l.PSn, {
                            className: "text-[#E34F26]"
                        })
                    }, {
                        name: "CSS",
                        icon: (0,
                        i.jsx)(l.H5g, {
                            className: "text-[#009df7]"
                        })
                    }, {
                        name: "JavaScript",
                        icon: (0,
                        i.jsx)(l.vl3, {
                            className: "text-[#F7DF1E]"
                        })
                    }, {
                        name: "NodeJS",
                        icon: (0,
                        i.jsx)(l.uds, {
                            className: "text-[#339933]"
                        })
                    }, {
                        name: "PHP",
                        icon: (0,
                        i.jsx)(l.sfN, {
                            className: "text-[#5d6dad]"
                        })
                    }, {
                        name: "MySQL",
                        icon: (0,
                        i.jsx)(l.uJt, {
                            className: "text-[#5798ca]"
                        })
                    }, {
                        name: "Supabase",
                        icon: (0,
                        i.jsx)(l.MyK, {
                            className: "text-[#0084d4]"
                        })
                    }, {
                        name: "MongoDB",
                        icon: (0,
                        i.jsx)(l.t$b, {
                            className: "text-[#47A248]"
                        })
                    }, {
                        name: "Redis",
                        icon: (0,
                        i.jsx)(m.lfh, {
                            className: "text-[#DC382D]"
                        })
                    }, {
                        name: "GraphQL",
                        icon: (0,
                        i.jsx)(l.dMV, {
                            className: "text-[#E10098]"
                        })
                    }, {
                        name: "RESTful API",
                        icon: (0,
                        i.jsx)(d.jp8, {
                            className: "text-[#FF5733]"
                        })
                    }, {
                        name: "Framer Motion",
                        icon: (0,
                        i.jsx)(l.HA2, {
                            className: "text-[#0055FF]"
                        })
                    }, {
                        name: "Three.js",
                        icon: (0,
                        i.jsx)(l.wVw, {
                            className: "text-[#FFF]"
                        })
                    }, {
                        name: "WooCommerce",
                        icon: (0,
                        i.jsx)(l.fIC, {
                            className: "text-[#96588A]"
                        })
                    }, {
                        name: "React Native",
                        icon: (0,
                        i.jsx)(d.KU_, {
                            className: "text-[#61DAFB]"
                        })
                    }, {
                        name: "Electron",
                        icon: (0,
                        i.jsx)(l.OdR, {
                            className: "text-[#47848F]"
                        })
                    }, {
                        name: "Docker",
                        icon: (0,
                        i.jsx)(l.VIR, {
                            className: "text-[#2496ED]"
                        })
                    }, {
                        name: "Shadcn/UI",
                        icon: (0,
                        i.jsx)(l.wTA, {
                            className: "text-[#FFF]"
                        })
                    }, {
                        name: "Drizzle",
                        icon: (0,
                        i.jsx)(l.i5p, {
                            className: "text-[#00A7E1]"
                        })
                    }]
                }
            }
        }
    },
    181: function(e, t, n) {
        function i(e) {
            return {
                hidden: {
                    x: -100,
                    opacity: 0
                },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 0,
                        duration: .5
                    }
                }
            }
        }
        function a(e) {
            return {
                hidden: {
                    x: 100,
                    opacity: 0
                },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 0,
                        duration: .5
                    }
                }
            }
        }
        function s(e) {
            return {
                hidden: {
                    y: -100,
                    opacity: 0
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0,
                        duration: .5
                    }
                }
            }
        }
        n.d(t, {
            P6: function() {
                return s
            },
            Zt: function() {
                return a
            },
            xq: function() {
                return i
            }
        })
    }
}]);
