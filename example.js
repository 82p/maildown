var example = `
毎度お世話になっております。

このツールは、Markdownから日本企業っぽいメールに変換を行なうことが出来ます。大変申し訳ございません。
大変申し上げにくいのですが、見出しやリストなどを全角記号に変換する他、メール独特の80文字折り返し文化に対応するなどの機能がございます。
折り返しにはTinySegmenterを使った簡易分かち書きを利用することで、単語途中での改行を防止する対応を行いました。
ご迷惑をおかけし、誠に申し訳ございません。

また、textlintを利用した、タイｐミスなどの警告機能もありｍす。句読点のつけ忘れなども警告されます


ソースはGitHub上にアッｐロード致しました。ご確認下さい。
https://github.com/anydown/maildown


## 例の件の対応

あれの件ですが、大変申し訳ございません。
もうしばらくお待ちいただけますと幸いです。
直ちに、商品を手配させていただき、
また、後ほど１００円値引きクーポン券をご送付させて頂きます。

70文字で折り返しを行います。

今後共当社をよろしくお願いいたします。今後共当社をよろしくお願いいたします。今後共当社をよろしくお願いいたします。今後共当社をよろしくお願いいたします。今後共当社をよろしくお願いいたします。今後共当社をよろしくお願いいたします。今後共当社をよろしくお願いいたします。今後共当社をよろしくお願いいたします。

| No. | 物品名 |
| ------------- | ------------- |
| 1 | PC本体 |
| 2 | バルクメモリ 8GB |
| 3 | 書籍：わかる！Markdown |
| 合計 | 3点 |


---

# 原因

考えられる原因は３つです

 1. 倉庫が燃えた
 1. 担当者が風邪をひいた
 1. その他

# 再発防止策

 * よく寝る
 * 栄養をとる
 * 倉庫のそばで焼き芋をしない

再発防止のため、本日はこれにて帰宅し、自宅療養させて頂きます。

以上、よろしくお願いいたします。
`

module.exports = example