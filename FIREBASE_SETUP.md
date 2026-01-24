# Firebase 配置说明

## 步骤 1: 创建 Firebase 项目

1. 访问 [Firebase Console](https://console.firebase.google.com/)
2. 点击"添加项目"或"创建项目"
3. 输入项目名称（例如：word-game-multiplayer）
4. 按照提示完成项目创建

## 步骤 2: 启用 Realtime Database

1. 在 Firebase Console 中，进入你的项目
2. 在左侧菜单中，点击"Realtime Database"
3. 点击"创建数据库"
4. 选择"以测试模式启动"（开发阶段）
5. 选择数据库位置（建议选择离你最近的区域）
6. 点击"完成"

## 步骤 3: 获取配置信息

1. 在 Firebase Console 中，点击项目设置（齿轮图标）
2. 滚动到"你的应用"部分
3. 如果没有应用，点击"添加应用"并选择"Web"（</>图标）
4. 注册应用后，你会看到配置信息，类似：

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## 步骤 4: 更新代码配置

打开 `script.js` 文件，找到以下代码（大约在第 30 行）：

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyDemo-Key-Replace-With-Your-Own",
    databaseURL: "https://your-project-id-default-rtdb.firebaseio.com/",
    projectId: "your-project-id"
};
```

将 `apiKey`、`databaseURL` 和 `projectId` 替换为你从 Firebase Console 获取的实际值。

**注意：** 只需要这三个字段即可，其他字段可以忽略。

## 步骤 5: 配置数据库规则（可选，但推荐）

为了安全，建议配置数据库规则：

1. 在 Firebase Console 中，进入 Realtime Database
2. 点击"规则"标签
3. 将规则更新为：

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true,
        ".validate": "newData.hasChildren(['roomId', 'targetWord', 'wordList', 'createdAt'])"
      }
    }
  }
}
```

4. 点击"发布"

**注意：** 这个规则允许任何人读写房间数据。在生产环境中，你可能需要添加身份验证。

## 步骤 6: 测试

1. 在浏览器中打开 `index.html`
2. 点击"双人"按钮切换到双人模式
3. 点击"创建房间"
4. 复制房间ID
5. 在另一个设备/浏览器标签页中，输入房间ID并加入
6. 开始游戏，应该能看到双方的实时进度

## 故障排除

### 问题：Firebase 未配置错误
- 确保已正确更新 `script.js` 中的 `firebaseConfig`
- 检查浏览器控制台是否有错误信息

### 问题：无法创建/加入房间
- 检查数据库规则是否允许读写
- 确保网络连接正常
- 检查浏览器控制台的错误信息

### 问题：看不到对方进度
- 确保两个设备都正确加入了同一个房间
- 检查 Firebase Console 中的数据库，看是否有数据写入
- 刷新页面重试

## 安全建议

1. **生产环境**：建议添加 Firebase Authentication 来验证用户身份
2. **数据库规则**：限制只有房间创建者或参与者才能读写数据
3. **API Key 限制**：在 Firebase Console 中限制 API Key 只能从特定域名使用

## 免费额度

Firebase Realtime Database 免费套餐包括：
- 1GB 存储空间
- 10GB/月 下载流量
- 100 个并发连接

对于个人项目和小型应用，这通常已经足够使用。
