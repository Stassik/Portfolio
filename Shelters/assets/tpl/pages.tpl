{* если главная страница (urlname == .)*}
{if $this->uri.0 == "."}
	{$content}
{else}
{* в остальных случаях показываем страницу *}
{include "sidebar.tpl"}
{include "breadcrumbs.tpl"}
<div role="main" class="main">
	{include "breadcrumb.tpl"}
	<div class="container detail">
		<div class="row">
			<div class="maxwidth-theme">
				<div class="col-md-12 col-sm-12 col-xs-12 content-md">
					{$content}
				</div>
			</div>
		</div>
	</div>
</div>
{/if}