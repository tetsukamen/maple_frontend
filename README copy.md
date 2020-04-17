# frontend

## setup

```
npm install
```

## run dev

```
ng serve --open
npm run mock
```

## アーキテクチャ
モジュールごとにserviceを作り、通信や複雑な処理はserviceで行う。データの保持はcomponentでもOK。
- src
  - app
    - core(全ての画面で使うもの)
      - auth(認証)
      - guards(ガード)
      - header(グローバルナビゲーション)
      - models(モデル)
      - services
        - httpBaseService(http通信のベース)
    - shared(複数の画面にまたがって使うもの)
      - directives
      - validators
      - components
        - dialog
        - form
        - message
        - mindmap(マインドマップ)
    - features(具体的な画面と機能)
      - mypage
      - search
      - auth
  - environments (環境変数の定義)

## ブランチモデル
作成する機能または画面ごとにissueを立て、それと同じ番号のブランチ feat/#○ を作って作業する。

【開発作業の流れ】

masterブランチからdevelopブランチを作成
developブランチから実装する機能毎にfeatureブランチを作成
featureブランチで実装完了した機能はdevelopブランチにマージ
リリース作業開始時点で、developからreleaseブランチを作成
リリース作業完了時点で、releaseからdevelop, masterブランチにマージ
【リリース後の障害対応の流れ】

masterブランチからhotfixブランチを作成
hotfixブランチで障害対応が完了した時点で、develop, masterブランチにマージ