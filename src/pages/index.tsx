import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroBackdrop from '@site/src/components/Hero/HeroBackdrop';
import HeroDemo from '@site/src/components/Hero/HeroDemo';
import InstallCommand from '@site/src/components/Hero/InstallCommand';
import {polotnoUrl} from '@site/src/utils/polotno';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import {useEffect, useState} from 'react';

import styles from './index.module.css';

export const frameworksList = [
  {
    name: 'Vanilla JS',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    name: 'Vue',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
      </svg>
    ),
  },
  {
    name: 'Angular',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z" />
      </svg>
    ),
  },
  {
    name: 'Svelte',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z" />
      </svg>
    ),
  },
];

export const companyList = [
  {
    name: 'Meta',
    logo: '/img/companies/meta.svg',
  },
  {
    name: 'Microsoft',
    logo: '/img/companies/microsoft.svg',
  },
  // {
  //   name: 'Vista',
  //   logo: '/img/companies/vista.svg',
  // },
  {
    name: 'Polotno',
    logo: '/img/companies/polotno.png',
  },
  {
    name: 'Labelbox',
    logo: '/img/companies/labelbox.png',
  },
  {
    name: 'Zazzle',
    logo: '/img/companies/zazzle.png',
  },
];

export const konvaUsers = [
  {
    name: 'Polotno',
    description: <Translate id="homepage.showcase.polotno">面向 Web 的设计编辑器 SDK</Translate>,
    image: '/assets/users/polotno.jpg',
    url: polotnoUrl('homepage', 'showcase-card'),
  },
  {
    name: 'SMMplanner',
    description: <Translate id="homepage.showcase.smmplanner">用于社交媒体故事和定时发布的编辑器</Translate>,
    image: '/assets/users/smmplanner.jpg',
    url: 'https://smmplanner.com/home/sc',
  },
  {
    name: 'SpreadSheet Grid',
    description: <Translate id="homepage.showcase.grid">面向 React 的类 Excel 数据网格</Translate>,
    image: '/assets/users/grid.jpg',
    url: 'https://rowsncolumns.app/',
  },
  {
    name: 'Windoor craft',
    description: <Translate id="homepage.showcase.windoor">用于门窗设计的拖放工具</Translate>,
    image: '/assets/users/windoor.jpg',
    url: 'https://windowcc.com/',
  },
  {
    name: 'Pixteller',
    description: <Translate id="homepage.showcase.pixteller">用于创建和自定义图像的工具</Translate>,
    image: '/assets/users/pixteller.jpg',
    url: 'https://pixteller.com',
    small: true,
  },
  {
    name: 'Paddee',
    description: <Translate id="homepage.showcase.paddee">照片亭模板市场和编辑器</Translate>,
    image: '/assets/users/paddee.jpg',
    url: 'https://getpaddee.com',
    small: true,
  },
  {
    name: 'Some-charts',
    description: <Translate id="homepage.showcase.grid2">JavaScript 图表库</Translate>,
    image: '/assets/users/some-charts.png',
    url: 'https://github.com/Lastik/some-charts',
    small: true,
  },
  {
    name: 'Shelly',
    description: <Translate id="homepage.showcase.shelly">一门用于绘图的编程语言</Translate>,
    image: '/assets/users/shelly.jpg',
    url: 'https://shelly.dev/',
    small: true,
  },
  {
    name: 'BoardOS',
    description: <Translate id="homepage.showcase.boardos">在线白板协作系统</Translate>,
    image: '/assets/users/boardos.jpg',
    url: 'https://boardos.online',
    small: true,
  },
  {
    name: 'Vokal',
    description: <Translate id="homepage.showcase.vokal">为社交媒体制作播客视频片段</Translate>,
    image: '/assets/users/vokal.jpg',
    url: 'https://app.vokal.co/editor',
    small: true,
  },
  {
    name: 'facetache',
    description: <Translate id="homepage.showcase.facetache">给照片加上胡子！</Translate>,
    image: '/assets/users/moustache.jpg',
    url: 'https://www.facetache.com/',
    small: true,
  },
  {
    name: 'ScriptureMark',
    description: <Translate id="homepage.showcase.scripturemark">在画布上与圣经文本交互</Translate>,
    image: '/assets/users/scripture-mark.jpg',
    url: 'https://www.scripturemark.org/canvas',
    small: true,
  },
  {
    name: "Let's Role",
    description: <Translate id="homepage.showcase.letsrole">在虚拟环境中玩桌面角色扮演游戏</Translate>,
    image: '/assets/users/lets-role.jpg',
    url: 'https://lets-role.com/',
    small: true,
  },
  {
    name: 'csgoboard',
    description: <Translate id="homepage.showcase.csgoboard">面向 Valve 游戏《反恐精英》的交互式战术板</Translate>,
    image: '/assets/users/csgoboard.jpg',
    url: 'https://csgoboard.com/board/new',
    small: true,
  },
  {
    name: 'brainzilla',
    description: <Translate id="homepage.showcase.brainzilla">在线拼图游戏</Translate>,
    image: '/assets/users/puzzle.jpg',
    url: 'https://www.brainzilla.com/puzzles/jigsaw/',
    small: true,
  },
  {
    name: 'react-avatar',
    description: <Translate id="homepage.showcase.reactavatar">使用 React 加载、裁剪和预览头像</Translate>,
    image: '/assets/users/avatar.jpg',
    url: 'https://github.com/kirill3333/react-avatar',
    small: true,
  },
  {
    name: 'Color wars game',
    description: <Translate id="homepage.showcase.colorwars">同屏多人街机游戏，主打对战</Translate>,
    image: '/assets/users/colors-wars.jpg',
    url: 'https://mcalus3.github.io/color-wars-web/',
    small: true,
  },
  {
    name: 'Opdome',
    description: <Translate id="homepage.showcase.opdome">在线图片词典</Translate>,
    image: '/assets/users/opdome.jpg',
    url: 'https://www.opdome.com/',
    small: true,
  },
  {
    name: 'E-cards',
    description: <Translate id="homepage.showcase.ecards">商务电子贺卡在线商店</Translate>,
    image: '/assets/users/e-cards.jpg',
    url: 'https://e-cards.shop/de/cards/create/1',
    small: true,
  },
  {
    name: 'Mystikaze',
    description: <Translate id="homepage.showcase.mystikaze">在线回合制六边形战棋策略游戏</Translate>,
    image: '/assets/users/mystikaze.jpg',
    url: 'https://nulisar.itch.io/mystikaze',
    small: true,
  },
  {
    name: "Moddy",
    description: <Translate id="homepage.showcase.moddy">为残障人士规划更安全的空间</Translate>,
    image: "/assets/users/moddy.jpg",
    url: "https://moddy.io/moddy-2d/",
    small: true,
  },
];

function AnimatedSubtitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let transitionTimer: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      transitionTimer = setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % frameworksList.length);
        setIsTransitioning(false);
      }, 300);
    }, 2400);

    return () => {
      clearInterval(timer);
      clearTimeout(transitionTimer);
    };
  }, []);

  const framework = frameworksList[currentIndex];

  return (
    <p className={styles.frameworkLine}>
      <Translate id="homepage.hero.frameworkPrefix">
        使用你熟悉的框架：
      </Translate>{' '}
      <span className={styles.frameworkWrapper}>
        <span
          className={clsx(styles.framework, isTransitioning && styles.fadeOut)}
        >
          {framework.icon}
          {framework.name}
        </span>
      </span>
    </p>
  );
}

const buildGuides = [
  {
    title: <Translate id="homepage.build.designEditor.title">设计编辑器</Translate>,
    description: <Translate id="homepage.build.designEditor.description">选择、调整大小、旋转、保存、撤销和导出对象。</Translate>,
    to: '/docs/sandbox/Canvas_Editor.html',
  },
  {
    title: <Translate id="homepage.build.whiteboard.title">无限画布白板</Translate>,
    description: <Translate id="homepage.build.whiteboard.description">使用稳定坐标平移和缩放大型工作区。</Translate>,
    to: '/docs/sandbox/Infinite_Canvas.html',
  },
  {
    title: <Translate id="homepage.build.nodeEditor.title">节点编辑器</Translate>,
    description: <Translate id="homepage.build.nodeEditor.description">连接可拖动节点，并实时更新每条连线。</Translate>,
    to: '/docs/sandbox/Connected_Objects.html',
  },
  {
    title: <Translate id="homepage.build.annotation.title">图像标注工具</Translate>,
    description: <Translate id="homepage.build.annotation.description">在图像上绘制、编辑和导出结构化区域。</Translate>,
    to: '/docs/sandbox/Image_Labeling.html',
  },
  {
    title: <Translate id="homepage.build.floorPlan.title">平面图</Translate>,
    description: <Translate id="homepage.build.floorPlan.description">让房间可交互，同时保留源几何数据。</Translate>,
    to: '/docs/sandbox/Interactive_Building_Map.html',
  },
  {
    title: <Translate id="homepage.build.seatMap.title">座位预订图</Translate>,
    description: <Translate id="homepage.build.seatMap.description">高效渲染和选择大量座位。</Translate>,
    to: '/docs/sandbox/Seats_Reservation.html',
  },
  {
    title: <Translate id="homepage.build.imageEditor.title">图像编辑器</Translate>,
    description: <Translate id="homepage.build.imageEditor.description">裁剪、变换图像，并按所需尺寸导出。</Translate>,
    to: '/docs/sandbox/Canvas_Crop_Image.html',
  },
  {
    title: <Translate id="homepage.build.multiplayer.title">多人白板</Translate>,
    description: <Translate id="homepage.build.multiplayer.description">将 Konva 状态连接到共享的 Yjs 文档。</Translate>,
    to: '/docs/sandbox/Multiplayer_Whiteboard.html',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <HeroBackdrop />
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroCopy}>
          <Heading as="h1" className={styles.heroTitle}>
            <Translate id="homepage.hero.title">
              为 Web 构建交互式图形
            </Translate>
          </Heading>
          <p className={styles.heroDescription}>
            <Translate id="homepage.hero.description">
              Konva 是一个 2D Canvas 场景图库。绘制图形、处理指针和触摸输入、制作动画并导出，无需编写 Canvas 样板代码。
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/index.html"
              data-plausible-event="Homepage CTA"
              data-plausible-source="hero-get-started"
            >
              <Translate id="homepage.hero.getStarted">开始使用</Translate>
            </Link>
            <Link
              className={styles.secondaryButton}
              to="/docs/sandbox.html"
              data-plausible-event="Homepage CTA"
              data-plausible-source="hero-demos"
            >
              <Translate id="homepage.hero.seeDemos">查看示例</Translate>
            </Link>
          </div>
          <InstallCommand />
          <ul className={styles.heroFacts}>
            <li><Translate id="homepage.fact.license">MIT 许可</Translate></li>
            <li><Translate id="homepage.fact.dependencies">无依赖</Translate></li>
            <li><Translate id="homepage.fact.maintained">自 2015 年起持续维护</Translate></li>
          </ul>
          <AnimatedSubtitle />
        </div>
        <div className={styles.heroDemo}>
          <HeroDemo />
        </div>
      </div>
    </header>
  );
}

function CompaniesSection() {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <section className={styles.companiesSection}>
      <div className="container">
        <p className={styles.companiesEyebrow}>
          <Translate id="homepage.companies.title">
            这些团队在生产环境中使用
          </Translate>
        </p>
        <div className={styles.companiesGrid}>
          {companyList.map((company) => (
            <div key={company.name} className={styles.companyItem}>
              <img
                className={styles.companyLogo}
                src={withBaseUrl(company.logo)}
                alt=""
                loading="lazy"
              />
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildGuidesSection() {
  return (
    <section className={styles.buildSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2"><Translate id="homepage.build.title">构建真实的 Canvas 应用</Translate></Heading>
          <p><Translate id="homepage.build.description">每个都是可运行的示例，你可以直接阅读并改造使用。</Translate></p>
        </div>
        <div className={styles.buildGrid}>
          {buildGuides.map((guide) => (
            <Link
              className={styles.buildCard}
              to={guide.to}
              key={guide.to}
              data-plausible-event="Homepage CTA"
              data-plausible-source={guide.to}
            >
              <Heading as="h3">{guide.title}</Heading>
              <p>{guide.description}</p>
              <span className={styles.buildCardLink}>
                <Translate id="homepage.build.openGuide">打开示例 →</Translate>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PolotnoSection() {
  return (
    <section className={styles.polotnoSection}>
      <div className={clsx('container', styles.polotnoInner)}>
        <div>
          <Heading as="h2"><Translate id="homepage.polotno.title">需要更快交付生产级设计编辑器？</Translate></Heading>
          <p>
            <Translate id="homepage.polotno.description">
              设计编辑器在 Canvas 之上还需要文本引擎、字体加载、模板、历史记录和导出流程。Polotno 是基于 Konva 构建的商业 SDK，这些功能都已内置。
            </Translate>
          </p>
        </div>
        <a
          className="button button--primary button--lg"
          href={polotnoUrl('homepage', 'homepage-band')}
          data-plausible-event="Polotno CTA"
          data-plausible-source="homepage"
        >
          <Translate id="homepage.polotno.open">了解 Polotno</Translate>
        </a>
      </div>
    </section>
  );
}

function KonvaUsersSection() {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <section className={styles.usersSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2"><Translate id="homepage.showcase.title">使用 Konva 构建</Translate></Heading>
          <p><Translate id="homepage.showcase.description">生产工具使用 Konva 构建编辑器、图表、标注和游戏。</Translate></p>
        </div>
        <div className={styles.usersGrid}>
          {konvaUsers.map((user) => (
            <a
              key={user.name}
              className={styles.userCard}
              href={user.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.preview}>
                <img
                  src={withBaseUrl(user.image)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.description}>
                <h3 className={styles.name}>{user.name}</h3>
                <p>{user.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.addAppWrapper}>
          <a
            href="https://github.com/konvajs/konva/discussions/1169"
            className={styles.addApp}
          >
            <Translate id="homepage.showcase.addApp">将你的应用添加到案例展示</Translate>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description={translate({
        id: 'homepage.meta.description',
        message:
          '使用 Konva.js 构建设计编辑器、白板、图表、地图以及其他交互式 2D Canvas 应用。',
      })}
    >
      <HomepageHeader />
      <main>
        <CompaniesSection />
        <HomepageFeatures />
        <BuildGuidesSection />
        <PolotnoSection />
        <KonvaUsersSection />
      </main>
    </Layout>
  );
}
