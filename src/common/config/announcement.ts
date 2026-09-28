/**
 * 公告配置
 * 用于在页面顶部展示全局公告信息
 */

export interface AnnouncementConfig {
  /** 是否启用公告 */
  enabled: boolean
  /** 公告唯一标识，用于localStorage记录关闭状态，修改id可让已关闭的用户重新看到公告 */
  id: string
  /** 公告消息的i18n key */
  message: {
    title: string
    content: string
  }
  /** 相关链接 */
  link?: {
    url: string
    text: string
  }
}

export const announcementConfig: AnnouncementConfig = {
  enabled: true,
  id: "v2.8.2",
  message: {
    title: "v2.8.2 更新公告",
    content: [
      "一、市场税率 5% → 4%（随游戏更新，重要）",
      "1. 全站税后到手口径同步（×0.95 → ×0.96）：利润榜、强化、超炼、贤者、转化链等各页利润约上浮 1%。",
      "2. 强化计算/强化模拟/贤者页「税率%」锁定值改为 4，旧存值自动迁移，无需手动改；强化页「溢价率%」默认跟至 4（仍可自行调高）。",
      "",
      "二、新功能",
      "1. 强化计算页：「目标」档位可以自己改——点齿轮增删档位（2~5 个），改完点页面空白处就保存了。",
      "2. 「最高利润步骤」勾选开放到全部动作页，且只在同一个动作内比较，物品不会因为别的动作利润更高而消失。",
      "",
      "三、修复",
      "1. 英文/繁中界面多步火车单被动作筛选误滤（选 Crafting 看不到 N steps 行）。",
      "2. 预设「战斗房等级」刷新后丢失。",
      "3. 神龛每级加成修正：精神（精华发现）3%、稀有（稀有发现）1.5%（原偏小）。"
    ].join("\n")
  },
  link: {
    url: "https://www.milkonomy.top/#/changelog",
    text: "查看详情"
  }
}

const STORAGE_KEY = "announcement-dismissed-2026"

/**
 * 检查公告是否应该显示
 */
export function shouldShowAnnouncement(): boolean {
  if (!announcementConfig.enabled) return false
  const dismissed = localStorage.getItem(STORAGE_KEY)
  return dismissed !== announcementConfig.id
}

/**
 * 关闭/忽略公告
 */
export function dismissAnnouncement(): void {
  localStorage.setItem(STORAGE_KEY, announcementConfig.id)
}
