import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '面向对象的 API',
    Svg: require('@site/static/assets/features/undraw_abstract_x68e.svg').default,
    description: (
      <>
        Konva 提供了面向对象的 API，支持多种形状，能够实现直观和灵活的画布操作。
      </>
    ),
  },
  {
    title: '跨平台支持',
    Svg: require('@site/static/assets/features/undraw_file_sync_ot38.svg').default,
    description: (
      <>
        Konva 提供对桌面和移动设备的无缝支持，确保跨平台的一致体验。
      </>
    ),
  },
  {
    title: '动画和补间',
    Svg: require('@site/static/assets/features/undraw_animating_1rgh.svg').default,
    description: (
      <>
        利用 Konva 内置的动画与补间功能，打造流畅生动的动态效果，实现交互式画布体验。
      </>
    ),
  },
  {
    title: '高级节点管理',
    Svg: require('@site/static/assets/features/undraw_fitting_pieces_cli3.svg').default,
    description: (
      <>
        Konva 支持节点嵌套、分组和事件冒泡，允许复杂的层次结构和高效的事件处理。
      </>
    ),
  },
  {
    title: '高质量导出',
    Svg: require('@site/static/assets/features/undraw_image_viewer_wxce.svg').default,
    description: (
      <>
        将您的画布创作导出为高质量的数据 URL、图像数据或图像对象，以便在各种应用中灵活使用。
      </>
    ),
  },
  {
    title: '即用型过滤器',
    Svg: require('@site/static/assets/features/undraw_options_2fvi.svg').default,
    description: (
      <>
        使用 Konva 的预构建滤镜集合增强您的画布，轻松添加视觉效果和变换。
      </>
    ),
  },
  {
    title: '框架集成',
    Svg: require('@site/static/assets/features/undraw_voice_interface_eckp.svg').default,
    description: (
      <>
        无缝集成 Konva 与流行的 web 框架，如 React、Vue 和 Svelte，以增强开发工作流程。
      </>
    ),
  },
  {
    title: '拖放支持',
    Svg: require('@site/static/assets/features/undraw_drag_5i9w.svg').default,
    description: (
      <>
        轻松实现互动拖放功能，借助 Konva 内置的支持提升用户体验。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
