$(document).ready(function () {

    let operation, difficulty, min, max, number, mark = "";
    let secund = 10, s = 0, score = 0, res, min1, max1, min2, max2, min3, max3, n1, n2, n3, div_result, question, answer;

    $("#new").click(function () {

        $(".op, #choose").show();
        $("#new, #help, #rules").hide();
        $("#name").css({
            'text-shadow' : '3px 3px 5px #00b2ff, 2px 2px 5px #00ff6a',
            'color': '#116604'});
        $("body").css('background-color', '#9afb9a');
    });
    $("#help").click(function () {

        $("#rules").fadeToggle();

    });
    $(".op").click(function () {
        operation = $(this).attr('id');
        $(".difficulty, #choose_difficulty").show();
        $(this).addClass('active');
        $(".op").not(this).removeClass('active');
        $("#name").css({
            'text-shadow' : '3px 3px 5px #f73b57, 2px 2px 5px #f73b57',
            'color': '#660404'});
        $("body").css('background-color', '#fbb5b5');
        $(".op").not(this).addClass('btn-danger');

        $("#choose").css('color', '#790909');

        $(".difficulty").click(function () {

            $("#name").css({
                'text-shadow' : '3px 3px 5px #ff5d00, 2px 2px 5px #f9994a',
                'color': '#663804'});
            $("body").css('background-color', '#fbf5b5');

            difficulty = $(this).attr('id');
            $(".op,#choose, #choose_difficulty,  #back, .difficulty").hide();
            $("#ready, #lg").show();
        });


    $("#lg").click(function () {
        $('#ready, #lg, #result, #back').hide();
        $('#game').fadeIn();

        $('.number').click(function () {
            number = $('#enter').val() + $(this).text();
            $('#enter').val(number);
        });

        $("#backspace").click(function () {
            var exp = $("#enter").val();
            $("#enter").val(exp.substring(0,exp.length-1));
        })

        $('#clear').click(function () {
            $('#enter').val("");
        });

        $(".route").text("Maths Game " + "> " + operation.charAt(0).toUpperCase() + operation.slice(1) + " > "
        + difficulty.charAt(0).toUpperCase() + difficulty.slice(1));

//--------DOT----------Random numbers------------


        const randNumber = (min, max) => { return Math.floor(Math.random() * (max + min) + min) };

        const randInt = (max) => { return randNumber(0, max) };


//--------DOT----------Operations------------


        if (operation === "addition") {
            if (difficulty === "easy") {
                min1 = 1; max1 = 9;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 9;
                n2 = randNumber(min2, max2);
            } else if (difficulty === "medium") {
                min1 = 1; max1 = 99;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 99;
                n2 = randNumber(min2, max2);
                score = score * 2;
            } else {
                min1 = 1; max1 = 999;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 999;
                n2 = randNumber(min2, max2);
                score = score * 3;
            }
        } else if (operation === "subtraction") {
            if (difficulty === "easy") {
                min1 = 2; max1 = 3;
                n1 = randNumber(min1, max1);
                min2 = 4; max2 = 9;
                n2 = randNumber(min2, max2);
            } else if (difficulty === "medium") {
                min1 = 5; max1 = 49;
                n1 = randNumber(min1, max1);
                min2 = 50; max2 = 99;
                n2 = randNumber(min2, max2);
            } else {
                min1 = 45; max1 = 499;
                n1 = randNumber(min1, max1);
                min2 = 500; max2 = 999;
                n2 = randNumber(min2, max2);
            }
        } else if (operation === "multiplication") {

            if (difficulty === "hard") {
                min1 = 5; max1 = 13;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 99;
                n2 = randNumber(min2, max2);
            } else if (difficulty === "medium") {
                min1 = 2; max1 = 6;
                n1 = randNumber(min1, max1);
                min2 = 4; max2 = 12;
                n2 = randNumber(min2, max2);
            } else {
                min1 = 1; max1 = 5;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 8;
                n2 = randNumber(min2, max2);
            }
        } else if (operation === "division") {
            if (difficulty === "hard") {
                min1 = 15; max1 = 35;
                n1 = randNumber(min1, max1);
                min2 = 5; max2 = 15;
                div_result = randNumber(min2, max2);
                n2 = n1 * div_result;
            } else if (difficulty === "medium") {
                min1 = 2; max1 = 6;
                n1 = randNumber(min1, max1);
                min2 = 4; max2 = 12;
                div_result = randNumber(min2, max2);
                n2 = n1 * div_result;
            } else {
                min1 = 1; max1 = 5;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 8;
                div_result = randNumber(min2, max2);
                n2 = n1 * div_result;
            }
        } else {
            if (difficulty === "hard") {
                min1 = 5; max1 = 13;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 99;
                n2 = randNumber(min2, max2);
                min3 = 7; max3 = 20;
                n3 = randNumber(min3, max3);
            } else if (difficulty === "medium") {
                min1 = 2; max1 = 6;
                n1 = randNumber(min1, max1);
                min2 = 4; max2 = 12;
                n2 = randNumber(min2, max2);
                min3 = 3; max3 = 7;
                n3 = randNumber(min3, max3);
            } else {
                min1 = 1; max1 = 5;
                n1 = randNumber(min1, max1);
                min2 = 1; max2 = 8;
                n2 = randNumber(min2, max2);
                min3 = 1; max3 = 4;
                n3 = randNumber(min3, max3);
            }
        }


        if (operation === "addition") {
            mark = "+";
        } else if (operation === "subtraction") {
            mark = "-";
        } else if (operation === "multiplication") {
            mark = "*";
        } else if (operation === "division") {
            mark = "/";
        }
        else {
            mark = "+";
        }


        if (mark === "+") {
            if (operation === "addition")
                res = n1 + n2;
            else
                res = (n2 + n1) * n3;
        } else if (mark === "*") {
            res = n1 * n2;
        } else if (mark === "-") {
            res = n2 - n1;
        } else {
            res = div_result;
        }

//--------DOT----------Question Generations------------

        if (operation !== "mixed") {
            question = n2 + " "+ mark + " " + n1;
        } else {
            question = "(" + n2 + mark + n1 + ") * " + n3;
        }

        $("#question").text(question + " = ?");


//--------DOT----------Timer code------------


        function timer() {

            $("#timer").text(secund--);

            if (secund === 0) {

                answer = $('#enter').val();

                clearInterval(time);
                secund = secund + s;

                if (Number(answer) !== res) {
                    exit();
                } else {
                    score++;
                    secund = 10;
                    newQuestion();
                }
            }
        }
        let time = setInterval(timer, 1000);

//--------DOT----------New Question------------

        function newQuestion() {

            if (operation === "addition" || operation === "subtraction" || operation === "multiplication") {
                n1 = randNumber(min1, max1);
                n2 = randNumber(min2, max2);
                question = n2 + " "+ mark + " " + n1;
            } else if (operation === "division") {
                if (difficulty === "hard") {
                    min1 = 15; max1 = 35;
                    n1 = randNumber(min1, max1);
                    min2 = 5; max2 = 15;
                    div_result = randNumber(min2, max2);
                    n2 = n1 * div_result;
                } else if (difficulty === "medium") {
                    min1 = 5; max1 = 15;
                    n1 = randNumber(min1, max1);
                    min2 = 4; max2 = 12;
                    div_result = randNumber(min2, max2);
                    n2 = n1 * div_result;
                } else {
                    min1 = 3; max1 = 8;
                    n1 = randNumber(min1, max1);
                    min2 = 1; max2 = 8;
                    div_result = randNumber(min2, max2);
                    n2 = n1 * div_result;
                }
            } else {
                n1 = randNumber(min1, max1);
                n2 = randNumber(min2, max2);
                n3 = randNumber(min2, max2);
                question = "(" + n2 + mark + n1 + ") * " + n3;
            }

            if (mark === "+") {
                if (operation === "addition")
                    res = n1 + n2;
                else
                    res = (n2 + n1) * n3;
            } else if (mark === "*") {
                res = n1 * n2;
            } else if (mark === "-") {
                res = n2 - n1;
            } else {
                res = div_result;
            }

            if (operation !== "mixed") {
                question = n2 + " "+ mark + " " + n1;
            } else {
                question = "(" + n2 + mark + n1 + ") *  " + n3;
            }

            $("#question").text(question + " = ?");
            $("#enter").val("");


            function timer() {

                $("#timer").text(secund--);

                if (secund === 0) {

                    answer = $('#enter').val();

                    clearInterval(time);
                    secund = secund + s;

                    if (Number(answer) !== res) {
                        exit();
                    } else {
                        score++;
                        secund = 10;
                        newQuestion();
                    }
                }
            }
            let time = setInterval(timer, 1000);
        }


        function exit() {
            $("#game").hide();
            $("#end, #back").show();
            
            $('#back').click(function () {
                $('#end, #back').hide();
                $('#new').show();
            });

            if (difficulty === "medium")
                score = Math.floor(score * 1.5);
            if (difficulty === "hard")
                score *= 2;

            if (score <= 1) {
                $("#score").text("Your score is " + score + " point");
            } else {
                $("#score").text("Your score is " + score + " points");
                if (score <= 2) {
                    $("#apreciation").text("Mmh.. maybe a bug");
                } else if (score <= 6) {
                    $("#apreciation").text("Good job!");
                } else if (score <= 10) {
                    $("#apreciation").text("Your nickname is calculator");
                } else {
                    $("#apreciation").text("Wait.. are you Einstein ?! :)");
                }
            }

            $("#correctanswer").text("The correct answer is " + res);
        }


        $('#next').click(function () {

            answer = $('#enter').val();

            if (Number(answer) !== res) {
                exit();
            } else {
                score++;
                secund = 10;
                newQuestion();
            }
        });
        });
    });
});
