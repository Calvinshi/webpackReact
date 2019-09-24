#css problem handle:
1.webpack中的css-loader的options中的modules属性为true时：

在jsx中引入时用 import XXX from 'xxx.css'

在jsx中使用方式： className={XXX.classname}

2.webpack中的css-loader的options中的modules属性为false时：

在jsx中引入时用 import 'xxx.css'

在jsx中使用方式： className="classname1 classname2"