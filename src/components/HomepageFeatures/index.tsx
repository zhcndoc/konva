import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: JSX.Element;
  icon: JSX.Element;
  description: JSX.Element;
};

// Small stroked marks, drawn inline. They carry no information on their own,
// so they stay decorative and the text does the work.
function Icon({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.feature.sceneGraph">面向对象的场景图</Translate>,
    icon: (
      <Icon>
        <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
        <path d="m3 12.5 9 4.5 9-4.5" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.sceneGraph.description">使用舞台、图层、组和图形节点，而不是底层绘图命令。</Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.input">指针和触摸输入</Translate>,
    icon: (
      <Icon>
        <path d="m5 3 6.5 16 2.3-6.2 6.2-2.3L5 3Z" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.input.description">桌面指针和触摸屏使用同一套事件系统。</Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.animation">动画和补间</Translate>,
    icon: (
      <Icon>
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M9.5 12h5" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.animation.description">逐帧更新图形，或使用补间让数值随时间变化。</Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.nodes">节点树和事件</Translate>,
    icon: (
      <Icon>
        <rect x="9" y="3" width="6" height="5" rx="1" />
        <rect x="2" y="16" width="6" height="5" rx="1" />
        <rect x="16" y="16" width="6" height="5" rx="1" />
        <path d="M12 8v4M5 16v-2h14v2" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.nodes.description">嵌套节点、组合相关图形，并使用事件冒泡或委托。</Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.export">光栅图导出</Translate>,
    icon: (
      <Icon>
        <path d="M12 3v11m0 0 4-4m-4 4-4-4" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.export.description">按指定像素比，将舞台或节点导出为 Canvas、数据 URL 或 Blob。</Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.filters">图像滤镜</Translate>,
    icon: (
      <Icon>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="9" cy="7" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="8" cy="17" r="2" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.filters.description">缓存节点，并应用模糊、对比度和灰度等内置滤镜。</Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.frameworks">框架集成</Translate>,
    icon: (
      <Icon>
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
        <path d="M11 7h4a2 2 0 0 1 2 2v4" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.frameworks.description">在 JavaScript、React、Vue、Svelte 或 Angular 中使用 Konva。</Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.drag">拖放和变换</Translate>,
    icon: (
      <Icon>
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <path d="M3 3h2v2H3zM19 3h2v2h-2zM3 19h2v2H3zM19 19h2v2h-2z" fill="currentColor" stroke="none" />
      </Icon>
    ),
    description: (
      <Translate id="homepage.feature.drag.description">让节点可拖动，再用 Transformer 添加调整大小和旋转控件。</Translate>
    ),
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <Heading as="h2">
            <Translate id="homepage.features.title">
              这个库为你提供什么
            </Translate>
          </Heading>
          <p>
            <Translate id="homepage.features.description">
              Konva 位于 canvas 元素与应用状态之间。
            </Translate>
          </p>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((feature, index) => (
            <div className={styles.feature} key={index}>
              {feature.icon}
              <Heading as="h3" className={styles.featureTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
