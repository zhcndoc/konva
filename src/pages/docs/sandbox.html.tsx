import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './sandbox.module.css';

/**
 * This gallery is hand-curated, so its labels live here rather than in the docs
 * front matter. They are translated through explicit ids.
 *
 * The ids are built at runtime, so `docusaurus write-translations` cannot
 * extract them. Their entries in i18n/<locale>/code.json are maintained by hand,
 * and are generated from the `sidebar_label` of each translated demo page.
 */
function demoLabelId(path: string): string {
  return `demos.item.${path.split('/').pop()!.replace(/\.html$/, '')}`;
}

const demoSidebar = {
  'CAD Systems': {
    'Canvas 编辑器': {
      image: 'polotno.jpg',
      path: 'sandbox/Canvas_Editor.html',
    },
    '简单窗口设计器': {
      image: 'simple-window.png',
      path: 'sandbox/Simple_Window_Frame.html',
    },
    '窗口框架设计器': {
      image: 'window.png',
      path: 'sandbox/Window_Frame_Designer.html',
    },
    '座位预订': {
      image: 'seats-reservation.jpg',
      path: 'sandbox/Seats_Reservation.html',
    },
    '图像标注': {
      image: 'annotate.jpg',
      path: 'sandbox/Image_Labeling.html',
    },
    '交互式建筑地图': {
      image: 'building_map-min.png',
      path: 'sandbox/Interactive_Building_Map.html',
    },
  },
  'Tools': {
    '签名板': {
      image: 'signature-pad.jpg',
      path: 'sandbox/Signature_Pad.html',
    },
    '徽章制作器': {
      image: 'badge-maker.jpg',
      path: 'sandbox/Badge_Maker.html',
    },
    '旋转与翻转图片': {
      image: 'rotate-flip.jpg',
      path: 'sandbox/Rotate_Flip_Image.html',
    },
    '无限画布': {
      image: 'infinite-canvas.jpg',
      path: 'sandbox/Infinite_Canvas.html',
    },
    '多人协作白板': {
      image: 'multiplayer-whiteboard.svg',
      path: 'sandbox/Multiplayer_Whiteboard.html',
    },
    '热力图生成器': {
      image: 'heatmap-generator.jpg',
      path: 'sandbox/Heatmap_Generator.html',
    },
    '裁剪图像': {
      image: 'crop-image.jpg',
      path: 'sandbox/Canvas_Crop_Image.html',
    },
    'Canvas 水印': {
      image: 'watermark.jpg',
      path: 'sandbox/Canvas_Watermark.html',
    },
    'Canvas 覆盖层': {
      image: 'canvas-overlay.jpg',
      path: 'sandbox/Canvas_Overlay.html',
    },
    'Canvas Sticker': {
      image: 'canvas-sticker.jpg',
      path: 'sandbox/Canvas_Sticker.html',
    },
  },
  'Games and Apps': {
    '幸运轮': {
      image: 'wheel-of-fortune-min.png',
      path: 'sandbox/Wheel_of_Fortune.html',
    },
    'Canvas Drawing': {
      image: 'free-drawing-min.png',
      path: 'sandbox/Free_Drawing.html',
    },
    '海滩动物游戏': {
      image: 'animals-min.png',
      path: 'sandbox/Animals_on_the_Beach_Game.html',
    },
    '行星图像地图': {
      image: 'planet-min.png',
      path: 'sandbox/Planets_Image_Map.html',
    },
    '物理模拟器': {
      image: 'simulator-min.png',
      path: 'sandbox/Physics_Simulator.html',
    },
  },
  'Common use cases': {
    '可编辑文本': {
      image: 'editable_text-min.png',
      path: 'sandbox/Editable_Text.html',
    },
    '富文本': {
      image: 'rich-text.jpg',
      path: 'sandbox/Rich_Text.html',
    },
    '画布滚动': {
      image: 'scroll.png',
      path: 'sandbox/Canvas_Scrolling.html',
    },
    '边缘拖动滚动': {
      image: 'scroll.png',
      path: 'sandbox/Scroll_By_Edge_Drag.html',
    },
    '在 Canvas 上的 GIF': {
      image: 'gif.jpg',
      path: 'sandbox/GIF_On_Canvas.html',
    },
    '画布上的视频': {
      image: 'video.jpg',
      path: 'sandbox/Video_On_Canvas.html',
    },
    '画布上的 SVG': {
      image: 'svg_on_canvas.jpg',
      path: 'sandbox/SVG_On_Canvas.html',
    },
    '画布背景': {
      image: 'canvas-background.jpg',
      path: 'sandbox/Canvas_Background.html',
    },
    '透明组': {
      image: 'transparent-group.jpg',
      path: 'sandbox/Transparent_Group.html',
    },
    '翻转图片': {
      image: 'mirror-shape.jpg',
      path: 'sandbox/Mirror_Canvas_Shape.html',
    },
    'Canvas to PDF': {
      image: 'pdf.jpg',
      path: 'sandbox/Canvas_to_PDF.html',
    },
    '自定义字体': {
      image: 'custom-font.png',
      path: 'sandbox/Custom_Font.html',
    },
    '相对鼠标位置': {
      image: 'pointer.png',
      path: 'sandbox/Relative_Pointer_Position.html',
    },
    '放置 DOM 元素': {
      image: 'drop.png',
      path: 'sandbox/Drop_DOM_Element.html',
    },
    '吸附与对齐引导线': {
      image: 'objects_snapping.png',
      path: 'sandbox/Objects_Snapping.html',
    },
    '相对于指针位置缩放': {
      image: 'relative_zoom-min.png',
      path: 'sandbox/Zooming_Relative_To_Pointer.html',
    },
    '恒定屏幕大小': {
      image: 'constant-screen-size.svg',
      path: 'sandbox/Constant_Screen_Size.html',
    },
    '原生上下文访问': {
      image: 'native-context-access.svg',
      path: 'sandbox/Native_Context_Access.html',
    },
    '画布上下文菜单': {
      image: 'context.jpg',
      path: 'sandbox/Canvas_Context_Menu.html',
    },
    '缩放图像以适应': {
      image: 'fit-image.jpg',
      path: 'sandbox/Scale_Image_To_Fit.html',
    },
    '限制拖动和调整大小': {
      image: 'resize-limit.jpg',
      path: 'sandbox/Limited_Drag_And_Resize.html',
    },
  },
  'Performance tests': {
    '拖放压力测试': {
      image: 'drag_stress-min.png',
      path: 'sandbox/Drag_and_Drop_Stress_Test.html',
    },
    '动画压力测试': {
      image: 'animation_stress-min.png',
      path: 'sandbox/Animation_Stress_Test.html',
    },
    '跳跃兔子': {
      image: 'bunnies.jpg',
      path: 'sandbox/Jumping_Bunnies.html',
    },
    '10,000 个带工具提示的形状': {
      image: 'tooltip_stress-min.png',
      path: 'sandbox/10000_Shapes_with_Tooltip.html',
    },
    '20000 节点': {
      image: '2000_nodes-min.png',
      path: 'sandbox/20000_Nodes.html',
    },
    '调整大小压力测试': {
      image: 'resize_stress.jpg',
      path: 'sandbox/Resizing_Stress_Test.html',
    },
    '振荡的斑点': {
      image: 'squiggle-min.png',
      path: 'sandbox/Quantum_Squiggle.html',
    },
  },
  'Other random demos': {
    'Web Worker': {
      image: 'offscreen.jpg',
      path: 'sandbox/Web_Worker.html',
    },
    '星星旋转器': {
      image: 'spinner-min.png',
      path: 'sandbox/Star_Spinner.html',
    },
    '流程图': {
      image: 'connected-objects.jpg',
      path: 'sandbox/Connected_Objects.html',
    },
    '图像调整大小': {
      image: 'image-resize-min.png',
      path: 'sandbox/Image_Resize.html',
    },
    '小地图／舞台预览': {
      image: 'preview.jpg',
      path: 'sandbox/Stage_Preview.html',
    },
    '使用锚点修改曲线': {
      image: 'modify-line-min.png',
      path: 'sandbox/Modify_Curves_with_Anchor_Points.html',
    },
    '图像边框': {
      image: 'border.jpg',
      path: 'sandbox/Image_Border.html',
    },
    '碰撞检测': {
      image: 'collision-min.png',
      path: 'sandbox/Collision_Detection.html',
    },
    '弹性星星': {
      image: 'stars-min.png',
      path: 'sandbox/Elastic_Stars.html',
    },
    '形状探戈': {
      image: 'tango-min.png',
      path: 'sandbox/Shape_Tango.html',
    },
    '图片边框高亮显示': {
      image: 'border-min.png',
      path: 'sandbox/Image_Border_Highlighting.html',
    },
    '鼠标悬停时放大图像': {
      image: 'hover_zoom-min.png',
      path: 'sandbox/Zoom_Layer_On_hover.html',
    },
    '响应式画布': {
      image: 'responsive-min.png',
      path: 'sandbox/Responsive_Canvas.html',
    },
    '手势事件': {
      image: 'gestures.jpg',
      path: 'sandbox/Gestures.html',
    },
    '多点触控缩放形状': {
      image: 'multitouch-min.png',
      path: 'sandbox/Multi-touch_Scale_Shape.html',
    },
    '多点触控缩放舞台': {
      image: 'multitouch-min.png',
      path: 'sandbox/Multi-touch_Scale_Stage.html',
    },
    '点击修改形状颜色': {
      image: 'color_click-min.png',
      path: 'sandbox/Modify_Shape_Color_on_Click.html',
    },
    '鼠标悬停时扩展图像': {
      image: 'hover_expand-min.png',
      path: 'sandbox/Expand_Images_on_Hover.html',
    },
    '形状工具提示': {
      image: 'shape_tooltip-min.png',
      path: 'sandbox/Shape_Tooltips.html',
    },
    '拖放多个形状': {
      image: 'drag_multiple-min.png',
      path: 'sandbox/Drag_and_Drop_Multiple_Shapes.html',
    },
  },
};

const demoSectionLabels: Record<string, string> = {
  'CAD Systems': 'CAD 系统',
  Tools: '工具',
  'Games and Apps': '游戏与应用',
  'Common use cases': '常见用例',
  'Performance tests': '性能测试',
  'Other random demos': '其他示例',
};

const DemoGrid = ({
  section,
  items,
}: {
  section: string;
  items: Record<string, { image: string; path: string }>;
}) => {
  // Assets must go through withBaseUrl. A hardcoded "/assets/..." ignores the
  // site baseUrl, which is "/<locale>/" for every non-default locale.
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div>
      <h2>
        {translate({
          id: `demos.section.${section}`,
          message: demoSectionLabels[section] ?? section,
        })}
      </h2>
      <div>
        {Object.entries(items).map(([title, { image, path }]) => (
          <div key={title} className={`${styles.gridItem} ${styles.small}`}>
            {/* Link, not <a>: a raw anchor drops the active locale. */}
            <Link to={`/docs/${path}`}>
              <div
                className={styles.preview}
                style={{
                  backgroundImage: `url(${withBaseUrl(`/assets/demos/${image}`)})`,
                }}
              ></div>
              <div className={styles.description}>
                <h4>{translate({ id: demoLabelId(path), message: title })}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Demos() {
  return (
    <Layout
      title={translate({ id: 'demos.title', message: '示例' })}
      description={translate({
        id: 'demos.description',
        message:
          '使用 Konva.js 构建的交互式示例：签名板、图像编辑器、游戏、拖放和动画等。可在浏览器中直接运行。',
      })}
    >
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>
          <Translate id="demos.heading">Konva 示例</Translate>
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>
          <Translate id="demos.intro">
            这些交互式示例展示了你可以使用 Konva.js 和 HTML5 Canvas 构建什么。
          </Translate>
        </p>
        {Object.entries(demoSidebar).map(([section, items]) => (
          <DemoGrid key={section} section={section} items={items} />
        ))}
      </div>
    </Layout>
  );
}
