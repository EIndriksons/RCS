<form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
    {!! csrf_field() !!}

    <input type="email" class="form-control" name="email">
    <input type="password" class="form-control" name="password">
    <input type="checkbox" name="remember"> Remember Me
    <button type="submit" class="btn btn-primary">Login</button>

</form>