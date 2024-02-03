import './style.css'

export default function layout({children}) {

  return (
    <html>
      <head>
        <link rel='icon' type='image/gif' href='/cinnamoroll-cappuccino.gif' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Jua' />
      </head>
      <body id='app'>
        {children}
      </body>
    </html>
  )

}