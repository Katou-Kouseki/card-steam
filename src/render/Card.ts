class Card {
  name = ''
  borderRadius = 4.5
  avatarUrlBase64 = ''
  playerLevel = 0
  gameCount = 0
  badgeCount = 0
  gamesSvg = ''
  gameImgList = []
  isOnline = {
    flag: 0,
    text: '离线',
    fill: 'white',
  }
  constructor({
    borderRadius,
    name,
    avatarUrlBase64,
    playerLevel,
    gameCount,
    badgeCount,
    isOnline,
    gameImgList,
  }) {
    this.borderRadius = borderRadius
    this.name = name
    this.avatarUrlBase64 = avatarUrlBase64
    this.playerLevel = playerLevel
    this.gameCount = gameCount
    this.badgeCount = badgeCount
    this.isOnline.flag = isOnline
    this.gameImgList = gameImgList
  }

  updateIsOnline() {
    let { flag } = this.isOnline
    if (flag > 0) {
      this.isOnline.text = '在线'
      this.isOnline.fill = '#10B981'
    }
  }

  async renderGames() {
    let gamesSvg = ''
    this.gameImgList.forEach((game: any, index: number) => {
      if (index < 5) {
        gamesSvg =
          gamesSvg +
          `<image width="70" xlink:href="${game}" height="25" x="${
            10 + index * 76
          }" y="50"></image>`
      } else {
        gamesSvg =
          gamesSvg +
          `<image width="70" xlink:href="${game}" height="25" x="${
            10 + (index - 5) * 76
          }" y="85"></image>`
      }
    })
    this.gamesSvg = gamesSvg
  }

  render() {
    return `
      <svg 
        width="400" height="120"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg">
          <style>
            .bg {
              fill:#1B2838
            }
          </style>
        <rect rx="4.5" class="bg" width="100%" height="100%" />
        <g fill="white" font-size="12">
          <image height="28" width="28" x="10" y="10" xlink:href="${this.avatarUrlBase64}"></image>
          <text x="45" y="22" font-size="14" fill="white">${this.name}</text>
          <text x="45" y="38" font-size="10" fill="${this.isOnline.fill}">${this.isOnline.text}</text>
          <text x="260" y="38" text-anchor="middle">游戏数</text>
          <text x="260" y="18" text-anchor="middle">${this.gameCount}</text>
          <text x="320" y="38" text-anchor="middle">徽章数</text>
          <text x="320" y="18" text-anchor="middle">${this.badgeCount}</text>
          <text x="370" y="38" text-anchor="middle">等级</text>
          <text x="370" y="18" text-anchor="middle">${this.playerLevel}</text>
        </g>
        <g>
          ${this.gamesSvg}
        </g>
      </svg>
    `
  }
}

export default Card
