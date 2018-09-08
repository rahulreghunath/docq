<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('Admin/css/style.css') }}" rel="stylesheet"></link>
</head>
<body>
<div id="app"></div>
{{--<script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMfwS9dLTDJNCUqkhhVpDTHra_zjZYEvo"></script>--}}

<script src="{{ asset('Admin/js/app.js') }}" type="application/javascript"></script>
</body>
</html>