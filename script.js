document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('b1');
    const finishButton = document.getElementById('d24');
    let gameStarted = false;
    let buttonClickLog = [];

    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', event => {
            if (!gameStarted && event.target.id !== 'b1') {
                alert('Please click CONNECT to build connection with the robot :)');
            } else {
                const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                buttonClickLog.push({ button: event.target.textContent, time: currentTime });
            }
        });
    });

    startButton.addEventListener('click', () => {
        gameStarted = true;
    });

    finishButton.addEventListener('click', () => {
        if (gameStarted) {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            // buttonClickLog.push({ button: 'Finish', time: currentTime });
            showLogAndDownload(buttonClickLog);
            gameStarted = false;
        } else {
            alert('To connect with the robot, please click START:)');
        }
    });

    function showLogAndDownload(log) {
        let logText = log.map(entry => `${entry.button} -- ${entry.time}`).join('\n');
        alert(logText);
        let blob = new Blob([logText], { type: 'text/plain' });
        let link = document.createElement('a');
        link.download = 'Teleoperation_Record.txt';
        link.href = window.URL.createObjectURL(blob);
        link.click();
        gameStarted = false;
        buttonClickLog = []
    }


    //Robot API
    document.getElementById('b9').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Now let us start our second task.Within the next two minute, please briefly introduce your goal in this task.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b10').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Remember that at this stage, you task is to introduce your own roles and understand the roles of other members. We will discuss more details in the next stage.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b17').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=We are now entering the second phase, Information Pooling. To achieve success, it is crucial to combine the various knowledge of group members. Next you have seven minutes to exchange information. Make sure to share your expert knowledge with others.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b18').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Remember to clearly communicate what information you think is important for solving the problem.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b19').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Each role has a specific goal. Remember to discuss that goal as well.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b20').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=If you have pieced together all the necessary information, it is time to come up with what you think is a reasonable solution and discuss it with others.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b25').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Now we have several potential solutions, next you have ten minutes to discuss and compare them. You should evaluate  all the potential solutions and will have time to make the final decision at the next phase.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b26').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Remember to go through the arguments and counterarguments of a solution.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b27').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Please note that at this stage we are focusing on discussing and evaluating different solutions.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b28').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Do not forget that you are a team. Everyone needs to contribute their expertise and work together to solve the problem.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b33').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=We are now in the final phase. All proposed solutions and arguments should be used to decide on how to solve the problem. You have seven minutes to make the decision.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b34').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=It is important to review all relevant information for decision making.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b35').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=We are in the final stage of the task with limited time, introducing new arguments may not be a good idea.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b36').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Once you have settled on a solution, write it down';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b41').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Discussion time is over, now please present and explain your final solution.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('b42').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=This is a great solution, you did an amazing job. On behalf of the children at the kindergarten, thank you all for your hard work.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d5').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Great job everyone.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d6').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=Could you explain more what you mean.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d7').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/gesture?name=Nod';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d8').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/gesture?name=BigSmile';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });




    document.getElementById('d9').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=I agree.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d10').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/say?Text=I do not agree with this.';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d11').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/attend?location=-11.0,2,15.0';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d12').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/attend?location=11.0,2,15.0';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    document.getElementById('d13').addEventListener('click', function () {
        const url = 'http://192.168.137.1:54321/furhat/attend?location=0,0,0';
        fetch(url, {
            method: 'POST',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Furhat said:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });



    // Function to change background color of given elements
    function changeBackgroundColor(ids, color) {
        ids.forEach(function (id) {
            document.getElementById(id).style.backgroundColor = color;
        });
    }

    // Function to restore original background color of given elements
    function restoreBackgroundColor(ids, originalColors) {
        ids.forEach(function (id, index) {
            document.getElementById(id).style.backgroundColor = originalColors[index];
        });
    }

    // Store the original background colors
    var originalBgColor = {
        'a2': document.getElementById('a2').style.backgroundColor,
        'a3': document.getElementById('a3').style.backgroundColor,
        'a4': document.getElementById('a4').style.backgroundColor,
        'a5': document.getElementById('a5').style.backgroundColor,
        'a6': document.getElementById('a6').style.backgroundColor,
        'a7': document.getElementById('a7').style.backgroundColor,
        'a8': document.getElementById('a8').style.backgroundColor,
        'a9': document.getElementById('a9').style.backgroundColor,
        'a10': document.getElementById('a10').style.backgroundColor,
        'a11': document.getElementById('a11').style.backgroundColor
    };

    // Event listener for button b1
    document.getElementById('b1').addEventListener('click', function () {
        changeBackgroundColor(['a2', 'a3'], '#ee9959');
    });

    // Event listener for button b9
    document.getElementById('b9').addEventListener('click', function () {
        setTimeout(function () {
            restoreBackgroundColor(['a2', 'a3'], [originalBgColor['a2'], originalBgColor['a3']]);
            changeBackgroundColor(['a4', 'a5'], '#ee9959');
        }, 300000); // 5 minutes 300second 300000
    });

    // Event listener for button b17
    document.getElementById('b17').addEventListener('click', function () {
        setTimeout(function () {
            restoreBackgroundColor(['a4', 'a5'], [originalBgColor['a4'], originalBgColor['a5']]);
            changeBackgroundColor(['a6', 'a7'], '#ee9959');
        }, 420000); // 7 minutes 420second 420000
    });

    // Event listener for button b25
    document.getElementById('b25').addEventListener('click', function () {
        setTimeout(function () {
            restoreBackgroundColor(['a6', 'a7'], [originalBgColor['a6'], originalBgColor['a7']]);
            changeBackgroundColor(['a8', 'a9'], '#ee9959');
        }, 600000); // 10 minutes 600second 600000
    });

    // Event listener for button b33
    document.getElementById('b33').addEventListener('click', function () {
        setTimeout(function () {
            restoreBackgroundColor(['a8', 'a9'], [originalBgColor['a8'], originalBgColor['a9']]);
            changeBackgroundColor(['a10', 'a11'], '#ee9959');
        }, 420000); // 7 minutes 420second 420000
    });

    // Event listener for button d24
    document.getElementById('d24').addEventListener('click', function () {
        restoreBackgroundColor(['a10', 'a11'], [originalBgColor['a10'], originalBgColor['a11']]);
        restoreBackgroundColor(['a8', 'a9'], [originalBgColor['a8'], originalBgColor['a9']]);
        restoreBackgroundColor(['a6', 'a7'], [originalBgColor['a6'], originalBgColor['a7']]);
        restoreBackgroundColor(['a4', 'a5'], [originalBgColor['a4'], originalBgColor['a5']]);
        restoreBackgroundColor(['a2', 'a3'], [originalBgColor['a2'], originalBgColor['a3']]);
    });

});
