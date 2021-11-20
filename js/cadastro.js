function cadastrar()
{
	var campoNome = document.getElementById("nome");
	campoNome.parentElement.classList.remove("erro");

	var campoEmail = document.getElementById("email");
	campoEmail.parentElement.classList.remove("erro");

	var campoSenha = document.getElementById("senha");
	campoSenha.parentElement.classList.remove("erro");

	var campoConfirmarSenha = document.getElementById("confirmar-senha");
	campoConfirmarSenha.parentElement.classList.remove("erro");

	var botaoCadastrar = document.getElementById("cadastrar");
	botaoCadastrar.parentElement.classList.remove("erro");

	if (campoNome.value.length < 1) // campo nome vazio
	{
		campoNome.parentElement.classList.add("erro");
		return;
	}
	if (campoEmail.value.length < 1) // campo email vazio
	{
		campoEmail.parentElement.classList.add("erro");
		return;
	}
	if (campoSenha.value.length < 1) // campo senha vazio
	{
		campoSenha.parentElement.classList.add("erro");
		return;
	}
	if (campoSenha.value != campoConfirmarSenha.value) // senhas diferentes
	{
		campoConfirmarSenha.parentElement.classList.add("erro");
		return;
	}

	entrar();
}

function entrar()
{
	location.href="../principal/principal.html";
}
