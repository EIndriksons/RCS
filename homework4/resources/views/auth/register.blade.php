<form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
    {!! csrf_field() !!}

    <input type="text" name="name">
    <input type="email" name="email">
    <input type="password" name="password">
    <input type="password" name="password_confirmation">
    <button type="submit" class="btn btn-primary">Register</button>

</form>