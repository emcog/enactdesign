<script>
  import Callout from '$lib/components/Callout.svelte'
</script>


<svelte:head>
  <title>Contact</title>
</svelte:head>


<div class="content-wrapper">
<h1>Contact</h1>
  <form name="contact" method="POST" data-netlify="true">

      <label>Name
        <input type="text" name="name" placeholder="Name" />
      </label>


      <label> Email
        <input type="email" name="email" placeholder="Email" />
      </label>


      <label class="message">Message
        <textarea name="message" placeholder="Message"></textarea>
      </label>


    <button type="submit" class="btn btn-primary">Send</button>
  </form>

</div>

<style lang="scss">
  .content-wrapper {
    //display: flex;
    //flex-direction: column;
  }

  .message {
     textarea {
       width: 100%;
       height: var(--xl8);
     }
  }

  label {
    display: block;
    margin: 0 0 var(--lg);
  }

  button {float: right;}

  input, textarea {
    font-family: var(--sans);
    color: var(--brand-black);
    //border: solid 2px var(--brand);
    //placeholder
    &::-webkit-input-placeholder {color: var(--brand-grey);}
    &:-ms-input-placeholder {color: var(--brand-grey);}
    &::placeholder {color: var(--brand-grey);}
    //
    &:focus{}
  }





</style>