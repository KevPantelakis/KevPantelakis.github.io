int x = 1;
int y = ++x;

// ++x
int x = 1;
x = x + 1;
y = x;

// x++
int x = 1;
y = x;
x = x + 1;

System.out.println(x);
System.out.println(y);