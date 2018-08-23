<html>
<head>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
<button type="button" id="bt">sdfsdf</button>
<script>
    document.getElementById('bt').addEventListener('click', function () {

        axios.post('/api/login', {
            username: 'rahul',
            password: 'password'
        }).then(function (response) {

            getUser(response.data.success.token);
            console.log(response);
        });

    });

    function getUser(token) {
        axios.post('/api/details', {
                params: {
                    token: token
                }
            }, {
                headers: {Authorization: "Bearer " + token}
            }
        ).then(function (response) {
            console.log(response);
        });
    }
</script>
</body>
</html>