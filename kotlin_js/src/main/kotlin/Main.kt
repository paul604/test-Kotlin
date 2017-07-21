/**
 * Created by PAUL on 19/07/2017.
 */
fun main(args: Array<String>) {
    println("test JavaScript!")
    println("sum : "+sum(2, 2))
    print("printSum : ")
    printSum(2, 2)
}

fun sum(a: Int, b: Int) = a + b

fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a + b}")
}

